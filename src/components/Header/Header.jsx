import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <span className="nav-title">Vegan Meme API</span>
        </Link>
      </div>
      <div>
        <nav>
          <ul className="nav-items">
            <Link to="/upload">
              <li>Upload</li>
            </Link>
            <Link to="/sandbox">
              <li>Sandbox</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/donate">
              <li>Buy Me a Coffee ☕</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header
