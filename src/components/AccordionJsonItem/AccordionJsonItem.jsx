/** @format */

import { useState } from "react";
import axios from "axios";
import "../AccordionUrlItem/AccordionUrlItem.css";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const veganMeme = `{
    asset_id: {type: String, required: false},
    created_by: { type: String, required: false },
    date: { type: String, required: false },
    meme_url: { type: String, required: false },
    file_name: { type: String, required: false },
    tag: {type: String, required: false },
    width: {type: Number, required: false},
    height: {type: Number, required: false},
    format: {type: String, required: false}
}`;

function AccordionJsonItem() {
  return (
    <>
      <div
        className="accordion accordion-flush lh-lg border rounded shadow"
        id="accordionFlushExample">
        <div className="accordion-item">
          <h2
            className="accordion-header font-monospace "
            id="flush-headingOne">
            <button
              className="accordion-button collapsed mt-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              Mongo database Schema
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="d-flex align-items-center  justify-content-center font-monospace bg-dark text-light px-5 py-2">
                {veganMeme}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
 
  );
}
export default AccordionJsonItem;
