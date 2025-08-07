import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center h-90">
      <div className="content-center">
        <div className="flex flex-col gap-1">
          <input className="border rounded px-1 focus:outline-none" placeholder="名前" />
          <input className="border rounded px-1 focus:outline-none" placeholder="メール" />
          <input className="border rounded px-1 focus:outline-none" placeholder="パスワード" />
          <input className="border rounded px-1 focus:outline-none" placeholder="*パスワード*" />
          <input className="border rounded px-1 focus:outline-none" placeholder="生-年-月-日" />
        </div>
        <button className="place-items-end cursor-pointer">회원가입</button>
      </div>
    </div>
  );
};

export default Signup;
