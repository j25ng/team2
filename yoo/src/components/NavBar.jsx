import React from "react";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleClick2 = () => {
    navigate("/signup");
  };
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between bg-black text-white">
      <div
        onClick={handleClickHome}
        className="flex text-2xl h-10 font-bold mb-6 p-5 cursor-pointer"
      >
        🎬 씨쥐뷔
      </div>
      <div className="flex flex-col gap-3 m-2">
        <button
          onClick={handleClick}
          className="bg-gray-400 cursor-pointer rounded-lg"
        >
          로그인
        </button>
        <button
          onClick={handleClick2}
          className="bg-gray-400 cursor-pointer rounded-lg"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default NavBar;
