// import { style } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./AccordionUrlItem.css";
import { useState } from "react";
import axios from "axios";

function AccordionUrlItem({ endpoint, index }) {
  const [preview, setPreview] = useState("");

  const handlePreview = async () => {
    await axios
      .get(endpoint.url)
      .then((res) => {
        if (endpoint.type === "meme") {
          setPreview(res.data.data[0].meme_url);
        } else {
          console.log(res.data.data.quote);
          setPreview(res.data.data.quote);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingUrl">
        <button
          onClick={handlePreview}
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          //target
          data-bs-target={`#flush-collapse${index}`}
          aria-expanded="false"
          aria-controls="flush-collapseUrl">
          {endpoint.url}
        </button>
      </h2>
      <div
        //id
        id={`flush-collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingUrl"
        data-bs-parent="#accordionFlushExample">
        <div className="accordion-body d-flex justify-content-between">
          <div>
            {endpoint.type === "meme" ? (
              <div className="">
                <img src={preview} className="img-thumbnail" />
              </div>
            ) : (
              <div className="text-cente p-4">
                <blockquote className="text-center quote p-4">
                  "{preview}"
                </blockquote>
              </div>
            )}
          </div>
          <div className="m-auto code p-4">
            <p>{endpoint.code}</p>
            {/* <SyntaxHighlighter
              language="javascript"
              style={dark}
              className="code">
                axios .get(url) .then((res) console.log(res)) .catch((err)
                console.log(res))
            </SyntaxHighlighter> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccordionUrlItem;
