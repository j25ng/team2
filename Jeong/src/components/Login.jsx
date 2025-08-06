import React from "react";

const Login = () => {
    return (
<div className="flex justify-center items-center w-screen mt-4">
        <div className="border-2 rounded-2xl border-gray-300 shadow-xl flex flex-col gap-3 justify-center items-center size-130 p-4 m-7">
          <p>ID or EMAIL</p>
          <input
            className="border border-gray-200 rounded-md px-1 text-lg"
            placeholder="ID or Email..."
          />
          <p>PASSWORD</p>
          <input
            className="border border-gray-200 rounded-md px-1 text-lg"
            placeholder="password..."
          />
          <button className="border-b-2 p-2 m-2 cursor-pointer font-bold">LOGIN</button>
        </div>
    </div>
    );
};

export default Login;
