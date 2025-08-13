import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import useDebounce from "../hooks/useDebounce";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const NavBar = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebounce(searchInput);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const home = () => {
    setSearchInput("");
    navigate("/");
  };

  const signup = () => navigate("/signup");
  const login = () => navigate("/login");
  const mylist = () => navigate("/mylist");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (debouncedSearchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(debouncedSearchInput)}`);
    }
  }, [debouncedSearchInput, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-between items-center h-30 p-4 bg-black">
        <div className="flex h-full items-center">
          <SiThemoviedatabase
            className="text-8xl text-blue-300"
            onClick={home}
          />
        </div>
        {!user ? (
          <div className="flex flex-col text-white w-20 gap-2">
            <button
              className="rounded p-2 bg-gray-500 hover:bg-gray-400"
              onClick={signup}
            >
              SignUp
            </button>
            <button
              className="rounded p-2 bg-gray-500 hover:bg-gray-400"
              onClick={login}
            >
              Login
            </button>
          </div>
        ) : (
          <div
            className="relative flex flex-col items-center justify-center text-white w-20 gap-2"
            ref={menuRef}
          >
            <FaUserCircle className="text-5xl" onClick={toggleMenu} />
            {menuOpen && (
              <div className="absolute top-full mt-2 flex flex-col gap-2 bg-gray-800 rounded p-2 shadow-lg right-0 z-10">
                <button
                  className="rounded p-2 bg-gray-500 hover:bg-gray-400"
                  onClick={() => {
                    mylist();
                    setMenuOpen(false);
                  }}
                >
                  Bookmarks
                </button>
                <button
                  className="rounded p-2 bg-gray-500 hover:bg-gray-400"
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
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
