// import movieDetailData from "../data/movieDetailData";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api/tmdb";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const MovieDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatailData = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieDetail(id);
        setDetailData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDatailData();
  }, [id]);

  if (isLoading || !detailData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center gap-4 m-5 w-6xl">
          <img
            src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`}
            className="aspect-2/3 w-1/3"
          />

          <div className="flex flex-col gap-3 justify-between w-1/3">
            <div className="flex flex-col">
              <div className="flex justify-between items-center gap-2">
                <p className="font-bold text-2xl my-5">
                  {detailData.original_title}
                </p>
                <p className="text-xl">⭐{detailData?.vote_average}</p>
              </div>
              <div className="flex flex-col gap-1">
                {detailData.genres?.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </div>
            </div>
            <div>
              <p>{detailData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
