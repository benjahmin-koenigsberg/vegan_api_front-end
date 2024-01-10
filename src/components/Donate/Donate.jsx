import './Donate.css'
import { Link } from 'react-router-dom';

function Donate() {
  return (
    <div className="donate-container container">
      <h5>
        Hey ! Do you like Vegan Meme API? Do you want to support the project?
      </h5>
      <Link to='/donate'>
        <button>Buy me a coffee ☕</button>
      </Link>
    </div>
  );
}
export default Donate
