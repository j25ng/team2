import MovieCard from "../components/MovieCard";
import MovieList from "../data/movieListData.json";

const MyList = () => {
  const bookmarkList = MovieList;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-black font-bold text-2xl text-white h-15">
        Bookmark List
      </div>
      <div className="grid grid-cols-4 gap-2 m-5">
        {bookmarkList.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
