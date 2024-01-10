import { useState } from "react";
import axios from "axios";
import "../AccordionUrlItem/AccordionUrlItem.css";

function AccordionJsonItem({ endpoint, index }) {

  const [ json, setJson] = useState();

  const handlePreview = async () => {
    await axios
      .get(endpoint.url).then( (res) => {
    setJson(JSON.stringify(res.data.data));
    console.log(json)
      }
      ).catch(err=>console.log(err))
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
        <div className="accordion-body">
          <p className="code p-2" style={{wordWrap: "break-word"}}>{json}</p>
        </div>
      </div>
    </div>
  );
}
export default AccordionJsonItem;
