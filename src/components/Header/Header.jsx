import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <span className="nav-title">
            <img src={logo} className="logo" />
            Vegan Meme API
          </span>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="nav-items">
            <Link to="/">
              <li>Home 🏠</li>
            </Link>
            <Link to="/sandbox">
              <li>Sandbox 🥼</li>
            </Link>
            <Link to="/upload">
              <li>Upload ⬆️</li>
            </Link>
            <Link to="/about">
              <li>About 💁</li>
            </Link>
            <a href="https://www.buymeacoffee.com/benjahmin" target="_blank">
              <li>Buy Me a Coffee ☕</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header
