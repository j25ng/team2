import {useParams} from "react-router-dom";
import movie from "../const/movieDetailData.json";

const MovieDetail = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <div className="flex">
      <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
      <div>
        <div className="flex text-2xl font-bold justify-between p-2">
          <p>{movie.title}</p>
          <p className="font-light">⭐{movie.vote_average}</p>
        </div>
        <div className="flex gap-3 justify-between p-2">
          {movie.genres.map((g) => (
            <p key={g.id}>{g.name}</p>
          ))}
        </div>
          <p className="flex text-justify border rounded-lg p-4 m-2 ">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
