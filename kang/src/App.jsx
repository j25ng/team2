
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/Home.jsx";
//import MovieDetail from "./page/movieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
