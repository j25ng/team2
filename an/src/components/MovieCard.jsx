import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${movie.id}`);
  };

  return (
    <div
      className="flex flex-col justify-center border border-gray-300 p-2 m-1 gap-1 transition hover:scale-105 hover:bg-gray-100"
      onClick={handleClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        className="aspect-2/3"
      />
      <p className="font-bold">{movie.title}</p>
      <p className="flex justify-end">⭐{movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
