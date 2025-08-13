import { useEffect, useState } from "react";
import { searchMovies } from "../api/tmdb";
import SearchCard from "./SearchCard";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    if (!query) return;
    const fetchSearchList = async () => {
      try {
        const data = await searchMovies(query);
        setSearchData(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearchList();
  }, [query]);

  return (
    <div className="p-5">
      {searchData?.length ? (
        <div className="flex flex-col gap-2">
          {searchData.map((movie) => (
            <SearchCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">영화를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Search;
