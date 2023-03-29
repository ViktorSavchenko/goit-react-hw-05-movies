import {  Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <header className="Header">
        <div className="Container Header-container">          
          <ul className="Header-list">
            <li className="Header-list__item">
              <Link to="/" className="Header-list__link">Home</Link>
            </li>
      
            <li className="Header-list__item">
              <Link to="/movies" className="Header-list__link">Movies</Link>
            </li>
          </ul>
          
          
          <h1 className="Main-title">Tranding</h1>
        </div>
      </header>
      
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;