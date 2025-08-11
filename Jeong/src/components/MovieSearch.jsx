import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_SEARCH_KEY}`,
    },
  };

  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    try {
      const res = await axios.request(options);
      setResults(res.data.results.slice(0, 5));
      setShowDropdown(true);
    } catch (error) {
      console.log(error);
      setShowDropdown(false);
    }
  }, [query]);

  // useEffect(() => {
  //   handleSearch();
  // }, [query]);

  const handleClickDetail = (m) => {
    navigate(`/details/${m.id}`);
    setShowDropdown(false);
    setQuery("");
  };

  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedSearch = useCallback(debounce(handleSearch, 1000), [
    handleSearch,
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch();
  };

  const handleImmediateSearch = () => {
    handleSearch(query);
  };

  return (
    <div className="relative z-30">
      <div className="border-none rounded-md bg-white flex w-55">
        <input
          type="text"
          placeholder="search movie..."
          value={query}
          onChange={handleInputChange}
          className=" px-2 p-1.5 text-sky-900"
        />
        <button
          className="border-none rounded-r-md bg-sky-200 p-1.5 text-lg cursor-pointer"
          onClick={handleImmediateSearch}
        >
          <BsFillSearchHeartFill />
        </button>
      </div>

      <div className="px-2 max-w-55 bg-white">
        {results.length > 0 && showDropdown
          ? results.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleClickDetail(movie)}
                className="cursor-pointer"
              >
                {movie.title}
              </div>
            ))
          : showDropdown && <p>No Results</p>}
      </div>
    </div>
  );
};

export default MovieSearch;
