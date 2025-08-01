import movieData from "./data/movieListData";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5">
      <div className="grid grid-cols-4 w-6xl">
        {movieData.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
