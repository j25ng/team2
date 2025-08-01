import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
