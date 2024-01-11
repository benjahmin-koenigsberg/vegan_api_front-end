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
        //console.log(res.data.data);
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
      <table className="table bg-light border rounded shadow">
        <thead className="">
          <tr>
            <th scope="col " className="table-text">
              {endpoint.url}
            </th>
          </tr>
        </thead>
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
                  class="btn btn-primary">
                  {endpoint.btnText}
                </button>
              ) : (
                <a href={endpoint.url} target="_blank">
                  <button> {endpoint.btnText}</button>
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
