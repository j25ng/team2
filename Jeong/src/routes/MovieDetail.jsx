import React from "react";
import MovieDetailData from "../data/movieDetailData.json";
import { HiOutlineStar } from "react-icons/hi";

const MovieDetail = (id) => {
  console.log(id);

  const movie = MovieDetailData;
  return (
    <div className="grid grid-cols-2 gap-5 m-10 border-4 rounded-3xl p-8">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className="p-6 content-center">
        <div className="flex justify-between p-6 border-none rounded-full bg-[#92bbe3] mb-4">
          <p className="font-bold text-4xl flex items-center">
            {movie.original_title}
          </p>
          <p className="flex items-center text-xl">
            <HiOutlineStar />
            {movie.vote_average}
          </p>
        </div>
        {movie.genres.map((genre) => (
          <p key={genre.id} className="">
            {genre.name}
          </p>
        ))}
        <p className="text-gray-800 mt-4">" {movie.overview} "</p>
      </div>
    </div>
  );
};

export default MovieDetail;
