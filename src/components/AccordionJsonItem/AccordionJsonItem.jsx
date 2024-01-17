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
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed mt-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Mongoose Schema
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <SyntaxHighlighter
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
              language="javascript"
              style={dark}>
              {veganMeme}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>

  );
}
export default AccordionJsonItem;
