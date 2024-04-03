import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="linkTag">
              Homepage
            </Link>
          </li>
          <li>
            <Link to="about" className="linkTag">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
