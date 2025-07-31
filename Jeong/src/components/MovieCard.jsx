import MovieListData from "../data/movieListData.json";
import { HiOutlineStar } from "react-icons/hi";

const MovieList = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 m-8">
        {MovieListData.results.map((movie) => (
          <div
            key={movie.id}
            className="border-2 justify-items-center rounded-lg border-[#8791bd] bg-gray-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
              className="aspect-[2/3] rounded-t-md"
            />
            <div className="justify-items-center w-full text-center rounded-b-md ">
              <p className="font-semibold w-4/5">{movie.original_title}</p>
              <div className="flex justify-center items-center">
                <HiOutlineStar />
                <p className=""> {movie.vote_average} </p>
                <HiOutlineStar />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
