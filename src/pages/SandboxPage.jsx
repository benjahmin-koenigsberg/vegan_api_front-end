/** @format */
import Header from "../components/Header/Header";
import { endpoints } from "../assets/endPoints";
import { useState, useEffect } from "react";
import axios from "axios";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  vsDark,
  shadesOfPurple,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import FormInput from "../components/FormInput";

const baseUrl = import.meta.env.VITE_BASE_URL;


function SandboxPage() {



  const [form, setForm] = useState({
    type: "",
    tag: "",
    author: "",
    id: "",
  });

  const [options, setOptions] = useState({
    tags: [],
    authors: [],
    meme_ids: [],
    quotes_ids: [],
  });

  useEffect(() => {

    axios.get(`${baseUrl}/api/v1/tags`).then((res) =>
      setOptions({ ...options, tags: res.data.data })
    );
    axios.get(`${baseUrl}/api/v1/quotes/authors`).then((res) =>
      //console.log(res.data)
      setOptions({ ...options, authors: res.data.data })
    );
    axios.get(`${baseUrl}/api/v1/all`).then((res) =>
      //console.log(res.data)
      setOptions({
        ...options,
        meme_ids: res.data.data.map((item) => item._id),
      })
    );
    axios.get(`${baseUrl}/api/v1/quotes/all`).then((res) =>
      //console.log(res.data)
      setOptions({
        ...options,
        quotes_ids: res.data.data.map( (index , item ) => item[index] ),
      })
    );
  } , [] );

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <Header />
      <h1>URL Sandbox 🧪</h1>
      <div className="upload-section">
        <section className="">
          <div className="main-container">
            <div className="">
              <form className="py-4">
                <div className="label-input-div">
                  <label htmlFor="file">Select type of content</label>
                  <select name="type" value={form.type} onChange={handleForm}>
                    <option value="memes">Memes</option>
                    <option value="quotes">Quote</option>
                  </select>
                </div>

                  <FormInput
                    value={form.tag}
                    form={form}

                    optionsArray={options.tags}
                    handleForm={handleForm}
                  />
                  <FormInput
                    value={form.author}
                    form={form}

                    optionsArray={options.authors}
                    handleForm={handleForm}
                  />

                  <FormInput
                    value={form.id}
                    form={form}

                    optionsArray={options.meme_ids}
                    handleForm={handleForm}
                  />

                  <FormInput
                    value={form.id}
                    form={form}

                    optionsArray={options.quotes_ids}
                    handleForm={handleForm}
                  />


                {/* <button >Get Url</button> */}
              </form>
            </div>
          </div>
        </section>
        {/* <div id="code-box" className=" my-4 m-auto w-50 ">
          <SyntaxHighlighter
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
                textAlign: "center",
              },
            }}
            wrapLines={true}
            language="javascript"
            style={dark}>
            {`${baseUrl}/${form.type}/authors/${form.author || form.tag}/${
              form.id
            }`}
          </SyntaxHighlighter>
        </div> */}
      </div>
    </>
  );
}
export default SandboxPage;
