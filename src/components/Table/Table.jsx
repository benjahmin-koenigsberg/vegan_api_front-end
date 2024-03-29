/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import axios from "axios";

function Table({ url, type }) {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  const handlePreview = async () => {
    if (type === "meme") {
      await axios
        .get(url)
        .then((res) => {})
        .catch((err) => console.log(err));
    } else {
      await axios
        .get(url)
        .then((res) => {})
        .catch((err) => console.log(err));
    }
  };

  return (
    <article>
      <table className="table bg-light">
        <thead className="">
          <tr>
            <th scope="col" role="columnheader" className="table-text">
              {url}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col" role="columnheader" className="table-text">
              <a href={url}>
                <button>test</button>
              </a>
            </th>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
export default Table;
