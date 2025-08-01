import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="bg-black text-white text-center p-4 text-2xl">
        Header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
