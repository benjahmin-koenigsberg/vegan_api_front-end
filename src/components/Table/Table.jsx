/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import axios from "axios";

function Table({ url, type }) {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  const handlePreview = async () => {
    // const window = document.getElementById("preview-window");
    // window.classList.toggle("hidden");

    if (type === "meme") {
      await axios
        .get(url)
        .then((res) => {
          // setPreview(res.data.data[0].meme_url);
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .get(url)
        .then((res) => {
          //console.log(res.data.data.quote)
          // setPreview(res.data.data.quote);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    // <div className="table-container">
    //   <div className="table">
    //     <p>{url}</p>
    //     {/* <button onClick={handlePreview}>test</button> */}
    //     <a href={url}>
    //       <button>test</button>
    //     </a>
    //   </div>
    //   {/* <div className="preview-container hidden" id="preview-window">
    //     {type === "meme" ? (
    //       <img src={preview} className="img-thumbnail img-fluid" />
    //     ) : (
    //       <quote className="text-center">{preview}</quote>
    //     )}
    //   </div> */}
    // </div>
    <>
      <table className="table bg-light">
        <thead className="">
          <tr>
            <th scope="col " className="table-text">
              {url}
            </th>
          </tr>
        </thead>
        <tbody  >
          <tr>
            <th scope="row" className="table-text">
              <a href={url}>
                <button>test</button>
              </a>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Table;
