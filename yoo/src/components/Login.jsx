import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center h-[500px]">
      <div className="space-y-4 p-6 w-full max-w-md">
        <div className="flex items-center gap-2">
          <span className="w-20">아이디</span>
          <input className="border" placeholder="id" />
          <button className="text-sm px-2 py-1 border bg-gray-400 cursor-pointer">
            중복확인
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-20">비밀번호</span>
          <input className="border" placeholder="password" />
        </div>
        <div className="flex justify-end text-sm cursor-pointer gap-2">
          <span>회원가입</span>
          <span>|</span>

          <span>비밀번호 잊어버렸을때</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
