import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Header.css";
import logo from "../assets/logo/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vibe Tee's" />
        <h1>Vibe Tee's</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Use Link instead of a */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Use Link instead of a */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
