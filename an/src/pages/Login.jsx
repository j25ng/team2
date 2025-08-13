import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { MdPermIdentity, MdPassword } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import api from "../api/expServer";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 유효성 상태
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

  const navigate = useNavigate();

  // 입력값 변화에 따라 유효성 체크
  useEffect(() => {
    setEmailValid(emailRegex.test(email));
    setPasswordValid(pwdRegex.test(password));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValid) {
      alert("유효한 이메일을 입력해주세요.");
      return;
    }
    if (!passwordValid) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await api.post("/login", { email, password });
      const { token, user } = response.data;

      login(user, token);
      alert(`로그인 성공! 환영합니다, ${user.name}님.`);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("이메일 또는 비밀번호가 잘못되었습니다.");
      } else {
        console.log(error);
        alert("로그인 중 오류가 발생했습니다.");
      }
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <SiThemoviedatabase className="text-6xl text-blue-900 my-10" />
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex items-center border rounded h-12 gap-2 text-xl p-2">
            <MdPermIdentity className="text-2xl" />
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="py-2 focus:outline-none font-bold text-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaRegCheckSquare
              className={emailValid ? "text-green-500" : "text-gray-500"}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center border rounded h-12 gap-2 text-xl p-2 ">
              <MdPassword className="text-2xl" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="py-2 focus:outline-none font-bold text-xl"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaRegCheckSquare
                className={passwordValid ? "text-green-500" : "text-gray-500"}
              />
            </div>
            {password.length > 0 && !passwordValid && (
              <p className="text-red-600 text-sm m-1">
                8~20자, 영문자와 숫자 포함되어야 합니다.
              </p>
            )}
          </div>
          <button
            className={`flex justify-center items-center h-12 w-full rounded font-bold text-white ${
              emailValid && passwordValid
                ? "bg-blue-500 hover:bg-blue-400"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!(emailValid && passwordValid)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
