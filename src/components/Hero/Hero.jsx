import "./Hero.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {

  const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080'

    const [numOfMemes, setNumOfMemes] = useState(null);

    useEffect(() => {
      axios.get(`${baseUrl}/api/v1/all`).then((res) => {
        setNumOfMemes(res.data.data.length);
      });
    }, []);

  return (
    <section className="hero-section ">
      <div className="main-container container">
        <div className="text-container">
          <h1>Vegan Meme API</h1>
          <p>Is a REST API to spread veganism thanks to vegan memes and quotes.</p>
          <p>We have {numOfMemes} memes for now</p>
        </div>
        <Link to='/upload' >
          <button>Upload a meme</button>
        </Link>
      </div>
    </section>
  );
}
export default Hero
