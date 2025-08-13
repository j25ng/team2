import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout.jsx";
import Search from "./components/Search.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import MyList from "./pages/MyList.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="details/:id" element={<MovieDetail />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route
            path="mylist"
            element={
              <PrivateRoute>
                <MyList />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
