import movieListData from "./const/movieListData";
import MovieCard from "./components/MovieCard";
import {Routes, Route} from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl h-10 font-bold mb-6 bg-black text-white">
              🎬 씨쥐뷔
            </h1>

            <div className="grid grid-cols-5  gap-6">
              {movieListData.results.map((movie) => (
                // . 은 그 안에 들어가는걸 의미함 ListData안에 있는 results 값을 map으로 돌리겠다.
                <MovieCard key={movie.id} movie={movie} />
                // MovieCard 컴포넌트 key값을 기준(기준은 id)으로 분류하고 movie 데이터를 사용할껀데
                // {}있는 movie 는 위에 맵에서 가져온 데이타를 기준으로  분류를 하겠다.
              ))}
            </div>
          </div>
        }
      />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
