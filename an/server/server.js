/* eslint-disable no-undef */
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import pool from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "토큰이 없습니다." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "유효하지 않은 토큰입니다." });
    }
    req.user = decoded; // 이후 라우트에서 decoded 정보 사용 가능
    next();
  });
}

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);

// Swagger 설정
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "Express + MySQL + Swagger 예제",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./server.js"], // API 주석을 읽을 파일
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: MySQL 연결 테스트
 *     responses:
 *       200:
 *         description: MySQL 연결 성공 메시지
 */
app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    res.send(`MySQL 연결 성공! 1 + 1 = ${rows[0].solution}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("MySQL 연결 실패");
  }
});

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 새 유저 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: 유저 생성 성공
 *       500:
 *         description: 서버 오류
 */
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";
    const [result] = await pool.query(sql, [email, hashedPassword, name]);

    res.status(201).json({ id: result.insertId, email, name });
  } catch (err) {
    console.error(err);
    res.status(500).send("유저 생성 실패");
  }
});

/**
 * @swagger
 * /checkEmail:
 *   get:
 *     summary: 이메일 중복 확인
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 이메일 중복 여부
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 */
app.get("/checkEmail", async (req, res) => {
  const { email } = req.query;
  try {
    const sql = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
    const [rows] = await pool.query(sql, [email]);
    res.json({ exists: rows[0].count > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send("이메일 중복 확인 실패");
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 유저 로그인
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await pool.query(sql, [email]);

    if (rows.length === 0) {
      return res.status(401).send("이메일 또는 비밀번호가 잘못되었습니다.");
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send("이메일 또는 비밀번호가 잘못되었습니다.");
    }

    // JWT 생성
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, // 비밀키 (환경변수로 관리)
      { expiresIn: "1h" } // 1시간 유효
    );

    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("로그인 실패");
  }
});

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     summary: JWT 토큰 검증
 *     responses:
 *       200:
 *         description: 유효한 토큰
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                 email:
 *                   type: string
 */
app.get("/auth/verify", verifyToken, (req, res) => {
  res.json({
    success: true,
    userId: req.user.id,
    name: req.user.name,
    email: req.user.email,
  });
});

app.listen(PORT, () => {
  console.log(`Express 서버 실행 중 - http://localhost:${PORT}`);
});
