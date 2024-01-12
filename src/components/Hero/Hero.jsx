import "./Hero.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {

  const baseUrl = import.meta.env.VITE_BASE_URL;

    const [numOfMemes, setNumOfMemes] = useState(null);

    useEffect(() => {
      axios.get(`${baseUrl}/all`).then((res) => {
        setNumOfMemes(res.data.data.length);
      });
    }, []);

  return (
    <section className="hero-section ">
      <div className="main-container container">
        <div className="text-container">
          <h1>Vegan Meme API</h1>
          <p>Is a REST API to spread veganism thanks to vegan memes.</p>
          <p>Have {numOfMemes} memes for now</p>
        </div>
        <Link to='/upload' >
          <button>Give me a meme</button>
        </Link>
      </div>
    </section>
  );
}
export default Hero
