import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="flex h-20 w-full bg-black" />
      </footer>
    </div>
  );
};

export default Layout;
