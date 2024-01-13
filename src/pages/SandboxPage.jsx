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
import { tagOptions, authorOptions, quoteIds } from "../assets/endPoints";

const baseUrl = import.meta.env.VITE_BASE_URL;

const quoteIdsArr = []
quoteIds.forEach((item, index)=>quoteIdsArr.push(index))


function SandboxPage() {

  const [form, setForm] = useState({
    type: "",
    tag: "",
    author: "",
    id: "",
  });

  const [options, setOptions] = useState({
    tags: tagOptions,
    authors: authorOptions,
    meme_ids: [],
    quotes_ids: quoteIdsArr
  });



useEffect( () => {

      axios.get(`${baseUrl}/api/v1/all`).then((res) =>
        setOptions({
          ...options,
          meme_ids: res.data.data.map((item) => item._id),
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
                <FormInput  label={'type of content'} name={'type'} value={form.type} optionsArray={['memes', 'quotes']} handleForm={handleForm} />
                {/* <div className="label-input-div">
                  <label htmlFor="file">Select type of content</label>
                  <select name="type" value={form.type} onChange={handleForm}>
                    <option value="memes">Memes</option>
                    <option value="quotes">Quote</option>
                  </select>
                </div> */}

                <FormInput
                  name={"tag"}
                  value={form.tag}
                  label={"Tag"}
                  optionsArray={options.tags}
                  handleForm={handleForm}
                />
                <FormInput
                  name={"author"}
                  value={form.author}
                  label={"Author"}
                  optionsArray={options.authors}
                  handleForm={handleForm}
                />

                <FormInput
                  name={"id"}
                  value={form.id}
                  label={"Id"}
                  optionsArray={options.meme_ids}
                  handleForm={handleForm}
                />

                <FormInput
                  name={"id"}
                  value={form.id}
                  label={"Id"}
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
