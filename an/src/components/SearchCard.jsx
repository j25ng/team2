import { useNavigate } from "react-router-dom";

const SearchCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${movie.id}`);
  };

  return (
    <div
      className="flex border border-gray-300 p-4 gap-5 transition hover:scale-101 hover:bg-gray-100"
      onClick={handleClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        className="w-20 aspect-2/3"
      />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{movie.title}</p>
          <p className="font-bold">⭐{movie.vote_average}</p>
        </div>
        <p className="flex flex-1 items-end">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default SearchCard;
