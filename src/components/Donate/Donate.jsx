import './Donate.css'
import { Link } from 'react-router-dom';

function Donate() {
  return (
    <div className="donate-container container">
      <p className='h5'>
        Hey! Do you like the Vegan Meme API? Do you want to support the project?
      </p>
   
      <a href="https://www.buymeacoffee.com/benjahmin" target='_blank'>
        <button className='btn btn-warning'>Buy me a coffee ☕</button>
      </a>
    </div>
  );
}
export default Donate
