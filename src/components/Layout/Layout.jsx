import {  Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
      
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
      
      <main>
        <Suspense  fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;