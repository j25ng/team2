import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../hooks/useDebounce";
const NavBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebounce(searchInput);
  const navigate = useNavigate();

  const home = () => {
    setSearchInput("");
    navigate("/");
  };

  const signUp = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (debouncedSearchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(debouncedSearchInput)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);

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
      <div className="flex justify-end border-2">
        <input
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow text-right m-1 focus:outline-none"
          placeholder="Search..."
        />
        <button className="flex-shrink-0 m-3 text-2xl">
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default NavBar;
