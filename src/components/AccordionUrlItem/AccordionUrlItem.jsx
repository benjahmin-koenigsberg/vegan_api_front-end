import "./AccordionUrlItem.css";
import { useState } from "react";
import axios from "axios";

function AccordionUrlItem({ endpoint, index }) {
  const [preview, setPreview] = useState({ url: "", quote: "", author: "" });

  const handlePreview = async () => {
    await axios
      .get(endpoint.url)
      .then((res) => {
        if (endpoint.type === "meme") {
          if (res.data.data[0]) {

            setPreview({ ...preview, url: res.data.data[0].meme_url });
          } else {
            setPreview({ ...preview, url: res.data.data.meme_url });
          }
          console.log(preview.url);
        } else {
          //  console.log(res.data.data.quote);
          setPreview({
            ...preview,
            quote: res.data.data.quote,
            author: res.data.data.author,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingUrl">
          <button
            onClick={handlePreview}
            className="accordion-button collapsed"
            //className="btn-primary collapsed"
            type="button"
            data-bs-toggle="collapse"
            //target
            data-bs-target={`#flush-collapse${index}-url`}
            aria-expanded="false"
            aria-controls={`#flush-collapse${index}`}>
            {endpoint.url}
          </button>
        </h2>

        <div
          id={`flush-collapse${index}-url`}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingUrl"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body bg-light">
            <div className="d-flex flex-column">
              <a href={endpoint.url} className="mb-2 mx-auto">
                <button>visit</button>
              </a>
              {endpoint.type === "meme" ? (
                <div className="d-flex justify-content-center">
                  <img src={preview.url} className="img-thumbnail" />
                </div>
              ) : (
                <div className="d-flex flex-column justify-content-center">
                  <blockquote className=" quote p-4">
                    " {preview.quote} "
                  </blockquote>
                  <p> - {preview.author ? preview.author : "Unknown"}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AccordionUrlItem;
