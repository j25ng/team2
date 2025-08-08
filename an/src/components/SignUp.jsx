import { SiThemoviedatabase } from "react-icons/si";
import {
  MdPermIdentity,
  MdPassword,
  MdAlternateEmail,
  MdDateRange,
} from "react-icons/md";

const SignUp = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <SiThemoviedatabase className="text-6xl text-blue-900 my-10" />
        <form className="flex flex-col gap-3">
          <div className="flex flex-col border rounded">
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-b">
              <MdPermIdentity className="text-2xl" />
              <input
                id="id"
                type="text"
                placeholder="ID"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-b">
              <MdPassword className="text-2xl" />
              <input
                id="pwd"
                type="password"
                placeholder="Password"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-b">
              <MdPassword className="text-2xl" />
              <input
                id="confirm_pwd"
                type="password"
                placeholder="Confirm Password"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2">
              <MdAlternateEmail className="text-2xl" />
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col border rounded">
            <div className="flex items-center h-12 gap-2 text-xl p-2 border-b">
              <MdPermIdentity className="text-2xl" />
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
            <div className="flex items-center h-12 gap-2 text-xl p-2">
              <MdDateRange className="text-2xl" />
              <input
                id="birth"
                type="date"
                placeholder=""
                className="py-2 focus:outline-none font-bold text-xl"
              />
            </div>
          </div>
          <button
            className="flex justify-center items-center h-12 w-full rounded bg-blue-500 font-bold hover:bg-blue-400 text-white"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
