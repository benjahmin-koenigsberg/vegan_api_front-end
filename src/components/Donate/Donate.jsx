import './Donate.css'
import { Link } from 'react-router-dom';

function Donate() {
  return (
    <div className="donate-container container">
      <h5>
        Hey ! Do you like Vegan Meme API? Do you want to support the project?
      </h5>
         <a href="https://www.buymeacoffee.com/benjahmin" target='_blank'>
        <button>Buy me a coffee ☕</button>
      </a>
    </div>
  );
}
export default Donate
