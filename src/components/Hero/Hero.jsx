import "./Hero.css"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="main-container">
        <div className="text-container">
          <h1>Vegan Meme API</h1>
          <p>Is a REST API to spread veganism thanks to vegan memes.</p>
          <p>Have 3 memes for now</p>
        </div>
        <Link to='/upload' >
          <button>Give me a meme</button>
        </Link>
      </div>
    </section>
  );
}
export default Hero
