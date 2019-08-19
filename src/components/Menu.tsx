import React from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <div className="navbar-fixed">
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <div className="brand-logo">
            <Link to="/">Logo</Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/favorites"><MdFavoriteBorder /> Favorites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};