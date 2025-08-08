import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";

function NavBar() {
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

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchResults, e.target.value);
  };

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const fetchResults = async () => {
      if (!debouncedSearchTerm) {
        setSearchResults([]);
        return;
      }

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              query: debouncedSearchTerm,
              language: "ko-KR",
            },
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        setSearchResults(response.data.results);
        console.log("검색 결과:", response.data.results);
      } catch (error) {
        console.log("검색 실패", error);
      }
    };
    fetchResults();
  }, [debouncedSearchTerm]);

  return (
    <div className="flex justify-between bg-blue-200 text-black">
      <div
        onClick={handleClickHome}
        className="flex text-2xl h-10 font-bold mb-6 p-5 cursor-pointer"
      >
        🎬 씨쥐뷔
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="영화 제목 검색"
        className="px-2 py-1 rounded text-black"
      />

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
}

export default NavBar;
