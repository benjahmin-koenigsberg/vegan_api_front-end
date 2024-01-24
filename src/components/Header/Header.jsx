/** @format */

import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <span className="nav-title">
            <img src={logo} className="logo" alt="vegan API logo" />
            Vegan Meme API
          </span>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="nav-items">
            <li>
              <Link to="/">Home 🏠</Link>
            </li>
            <li>
              <Link
                to="https://documenter.getpostman.com/view/25444855/2s9YymHQJX"
                target="_blank">
                API Docs 🗒️
              </Link>
            </li>
            <li>
              <Link to="/sandbox">Sandbox 🥼 </Link>
            </li>
            <li>
              <Link to="/upload">Upload ⬆️</Link>
            </li>
            <li>
              <Link to="/about">About 💁</Link>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/benjahmin" target="_blank">
                Buy Me a Coffee ☕
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
