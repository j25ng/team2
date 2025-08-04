import { useParams } from "react-router-dom";
import movieDetailData from "../data/movieDetailData";

const MovieDetail = () => {
  const { id } = useParams();
  const expData = movieDetailData;

  console.log(id);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center gap-4 m-5 w-6xl">
          <img
            src={`https://image.tmdb.org/t/p/original/${expData.poster_path}`}
            className="aspect-2/3 w-1/3"
          />

          <div className="flex flex-col gap-3 justify-between w-1/3">
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-2">
                <p className="font-bold text-2xl my-5">
                  {expData.belongs_to_collection.name}
                </p>
                <p className="text-xl">⭐{expData.vote_average}</p>
              </div>
              <div className="flex flex-col gap-1">
                {expData.genres.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </div>
            </div>
            <div>
              <p>{expData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
