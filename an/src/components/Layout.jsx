import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <div className="flex h-20 w-full bg-black" />
      </footer>
    </div>
  );
};

export default Layout;
