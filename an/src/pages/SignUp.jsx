import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { FaRegCheckSquare } from "react-icons/fa";
import {
  MdPermIdentity,
  MdPassword,
  MdOutlineAlternateEmail,
} from "react-icons/md";
import api from "../api/expServer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [dupCheck, setDupCheck] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [confirmPwdCheck, setConfirmPwdCheck] = useState(false);

  const [emailChecked, setEmailChecked] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  useEffect(() => {
    setDupCheck(emailRegex.test(email));
    setPwdCheck(pwdRegex.test(pwd));
    setConfirmPwdCheck(pwd === confirmPwd && pwd !== "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, pwd, confirmPwd]);

  // 이메일 입력 변경 시 중복확인 초기화
  useEffect(() => {
    setEmailChecked(false);
    setEmailExists(false);
  }, [email]);

  const checkEmailDup = async () => {
    if (!emailRegex.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }
    try {
      const res = await api.get("/checkEmail", { params: { email } });
      setEmailExists(res.data.exists);
      setEmailChecked(true);
      if (res.data.exists) {
        alert("이미 사용 중인 이메일입니다.");
      } else {
        alert("사용 가능한 이메일입니다.");
      }
    } catch (err) {
      console.error(err);
      alert("중복 확인 중 오류가 발생했습니다.");
    }
  };

  // 폼 유효성 검사
  const isFormValid =
    name.trim() !== "" &&
    emailChecked &&
    !emailExists &&
    pwdCheck &&
    confirmPwdCheck;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const response = await api.post("/signup", {
        name,
        email,
        password: pwd,
      });

      console.log(response.data);
      alert("회원가입 성공!");
      login();
    } catch (error) {
      if (error.response) {
        alert(`회원가입 실패: ${error.response.data}`);
      } else {
        alert(error.response);
        // alert("서버 오류가 발생했습니다. 다시 시도해주세요.");
      }
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <SiThemoviedatabase className="text-6xl text-blue-900 my-10" />
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col border rounded">
            <div className="flex items-center h-12 gap-2 text-xl p-2">
              <MdPermIdentity className="text-2xl" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-t">
              <MdOutlineAlternateEmail className="text-2xl" />
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="py-2 focus:outline-none font-bold text-xl"
              />
              <FaRegCheckSquare
                className={dupCheck ? "text-green-500" : "text-gray-500"}
              />
            </div>
          </div>
          <div
            className={`flex justify-center items-center rounded p-2 text-white font-bold ${
              emailChecked ? "bg-gray-500" : "bg-green-500"
            }`}
          >
            <button
              type="button"
              onClick={checkEmailDup}
              disabled={emailChecked}
            >
              Check Email
            </button>
          </div>
          <div className="flex flex-col border rounded">
            <div className="flex items-center h-12 gap-2 text-xl p-2">
              <MdPassword className="text-2xl" />
              <input
                id="pwd"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="Password"
                className="py-2 focus:outline-none font-bold text-xl"
              />
              <FaRegCheckSquare
                className={pwdCheck ? "text-green-500" : "text-gray-500"}
              />
            </div>
            {pwd && !pwdCheck && (
              <p className="text-red-600 text-sm m-1">8~20자, 영문·숫자 포함</p>
            )}
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-t">
              <MdPassword className="text-2xl" />
              <input
                id="confirm_pwd"
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                placeholder="Confirm Password"
                className="py-2 focus:outline-none font-bold text-xl"
              />
              <FaRegCheckSquare
                className={confirmPwdCheck ? "text-green-500" : "text-gray-500"}
              />
            </div>
            {confirmPwd && !confirmPwdCheck && (
              <p className="text-red-600 text-sm m-1">
                비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
          <button
            className={`flex justify-center items-center h-12 w-full rounded font-bold text-white ${
              isFormValid ? "bg-blue-500 hover:bg-blue-400" : "bg-gray-500"
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
