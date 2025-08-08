import { SiThemoviedatabase } from "react-icons/si";
import { MdPermIdentity, MdPassword } from "react-icons/md";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <SiThemoviedatabase className="text-6xl text-blue-900 my-10" />
        <form className="flex flex-col gap-3">
          <div className="border rounded">
            <div className="flex items-center h-12 border-b gap-2 text-xl p-2">
              <MdPermIdentity className="text-2xl" />
              <input
                id="id"
                type="text"
                placeholder="ID"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2 ">
              <MdPassword className="text-2xl" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
          </div>
          <button
            className="flex justify-center items-center h-12 w-full rounded bg-blue-500 font-bold hover:bg-blue-400 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
