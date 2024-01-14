import './Donate.css'
import { Link } from 'react-router-dom';

function Donate() {
  return (
    <div className="donate-container container">
      <h5>
        Hey! Do you like the Vegan Meme API? Do you want to support the project?
      </h5>
      {/* <a href="https://www.buymeacoffee.com/benjahmin">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=benjahmin&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" />
      </a> */}
      <a href="https://www.buymeacoffee.com/benjahmin" target='_blank'>
        <button className='btn btn-warning'>Buy me a coffee ☕</button>
      </a>
    </div>
  );
}
export default Donate
