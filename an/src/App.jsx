// import movieData from "./data/movieListData";
import MovieCard from "./components/MovieCard";
import { getMovieList } from "./api/tmdb";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovieList(page);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5">
      <div className="grid grid-cols-4 w-6xl">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div></div>

      <div className="flex gap-5 mt-4 p-2 h-12 rounded bg-gray-300 m-2">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="font-bold"
        >
          <FaAngleDoubleLeft />
        </button>
        <p className="flex items-center justify-center rounded w-10 font-bold">
          {page}
        </p>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="font-bold"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default App;
