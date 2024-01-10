/** @format */

import { useState } from "react";
import "./Table.css";
import axios from "axios";

function Table({ url }) {
  const [preview, setPreview] = useState("");

  const handlePreview = async () => {
    const window = document.getElementById("preview-window");
    window.classList.toggle("hidden");

    await axios
      .get(url)
      .then((res) => {
        setPreview(res.data.data[0].meme_url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="table-container">
      <div className="table">
        <h4>{url}</h4>
        <button onClick={handlePreview}>test</button>
      </div>
      <div className="preview-container hidden" id="preview-window">
        <img src={preview} className="img-thumbnail img-fluid" />
      </div>
    </div>
  );
}
export default Table;
