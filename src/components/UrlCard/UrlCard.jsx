import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Model from "../Model";
import { Modal } from "react-bootstrap";


function UrlCard({ endpoint }) {

  const [preview, setPreview] = useState({ url: "", quote: "", author: "" });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


useEffect(()=>{


  // if(endpoint.type === 'meme'){
  //   handlePreview()
  // } else {
  //   return
  // }

}, [])

  const handlePreview = async () => {
    await axios
      .get(endpoint.url)
      .then((res) => {
        console.log(res.data.data);
         setPreview({
            url: res.data.data,
            quote: res.data.data.quote,
            author: res.data.data.author,
          });
        // setPreview(res.data.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <p className="m-0 font-monospace">{endpoint.description} </p>
      <table className="table bg-light border rounded shadow d-flex justify-content-between align-items-center px-2"
      style={{ fontSize: 'calc(50% + 1vmin)' }}>
          <tr className="">
            <th scope="col" className="table-text">
              {endpoint.url}
            </th>
          </tr>
        <tbody>
          <tr>
            <th scope="row" className="table-text">
              {endpoint.href === "preview" ? (
                <button
                  onClick={() => {
                    handlePreview();
                    handleShow();
                  }}
                  type="button"
                  class="btn btn-primary m-auto">
                  {endpoint.btnText}
                </button>
              ) : (
                <a href={endpoint.url} target="_blank" >
                  <button type="button" className="btn btn-success m-auto"> {endpoint.btnText}</button>
                </a>
              )}
            </th>
          </tr>
        </tbody>
      </table>

      <Model
        preview={preview}
        endpoint={endpoint}
        handleClose={handleClose}
        show={show}
        handlePreview={handlePreview}
      />
    </>
  );
}
export default UrlCard;
