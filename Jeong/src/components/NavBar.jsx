import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 bg-amber-100 h-45">
      <div />
      <p
        className="font-bold text-7xl rounded-lg p-6 flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        MOVIES
      </p>
      <div className="flex flex-col items-end justify-center gap-3 mx-4">
        <button
          className="border-none rounded-md p-2 bg-sky-200 text-gray-800 font-semibold text-center min-w-18 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </button>
        <button
          className="border-none rounded-md p-2 bg-sky-200 text-gray-800 font-semibold text-center min-w-18 cursor-pointer"
          onClick={() => navigate("/loginpage")}
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default NavBar;
