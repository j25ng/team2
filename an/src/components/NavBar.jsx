import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const signUp = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center h-30 p-4 bg-black">
        <div className="flex h-full items-center">
          <SiThemoviedatabase
            className="text-8xl text-blue-300"
            onClick={home}
          />
        </div>
        <div className="flex flex-col text-white w-20 gap-2">
          <button
            className="rounded p-2 bg-gray-500 hover:bg-gray-400"
            onClick={signUp}
          >
            회원가입
          </button>
          <button
            className="rounded p-2 bg-gray-500 hover:bg-gray-400"
            onClick={login}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
