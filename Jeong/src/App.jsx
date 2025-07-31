// import { useState } from "react";
import MovieList from "./components/MovieCard.jsx"
import movieData from "./data/movieListData.json"
import MovieCard from "./components/MovieCard.jsx"


function App() {
  const movies = movieData['results']
  
 console.log(movies)

  return (
<div>
      <div className="p-3 w-screen h-48 flex justify-center items-center">
        <p className="font-bold text-7xl border-6 rounded-lg p-6 border-stone-400">MOVIES</p>
      </div>
    <div className="">
        <MovieCard key={movieData.id}       
        />
    </div> 
</div>   
  )
}

export default App
