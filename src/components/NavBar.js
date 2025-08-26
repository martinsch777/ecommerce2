import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget.js';

export function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-section">
        <Link to="/">
          <img
            src="/mi-logo.jpg"  /* colocá un mi-logo.jpg en public/ */
            alt="Logo de la tienda"
            className="navbar-logo"
          />
        </Link>
        <span className="navbar-title">Mi Tienda Online</span>
      </div>

      <div className="navbar-links-wrapper">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Inicio</Link>
          <Link to="/category/ropa" className="navbar-link">Ropa</Link>
          <Link to="/category/electronica" className="navbar-link">Electrónica</Link>
          <Link to="/category/hogar" className="navbar-link">Hogar</Link>
        </div>
      </div>

      <div className="navbar-cart-widget">
        <CartWidget />
      </div>

      <style jsx>{`
        .navbar-container {
          background-color: white;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          border-radius: 8px;
        }
        .navbar-logo-section {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          color: #1f2937;
          margin-right: 24px;
        }
        .navbar-logo {
          border-radius: 9999px;
          margin-right: 8px;
          width: 40px;
          height: 40px;
        }
        .navbar-title { font-weight: bold; font-size: 20px; letter-spacing: -0.025em; }
        .navbar-links-wrapper { display: block; width: auto; }
        @media (min-width: 1024px) {
          .navbar-links-wrapper { display: flex; align-items: center; }
        }
        .navbar-links { font-size: 14px; }
        @media (min-width: 1024px) {
          .navbar-links { display: flex; }
        }
        .navbar-link {
          display: inline-block;
          color: #4b5563;
          margin-right: 16px;
          padding: 8px;
          border-radius: 6px;
          transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
        }
        .navbar-link:hover { color: #111827; background-color: #f3f4f6; }
        .navbar-cart-widget { display: flex; align-items: center; }
      `}</style>
    </nav>
  );
}
