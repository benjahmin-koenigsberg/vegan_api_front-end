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

function SandboxPage() {

  const [form, setForm] = useState({
    type: "meme",
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
    axios.get("http://localhost:8080/api/v1/tags").then((res) =>
      //console.log(res.data)
      setOptions({ ...options, tags: res.data.data })
    );
    axios.get("http://localhost:8080/api/v1/quotes/authors").then((res) =>
      //console.log(res.data)
      setOptions({ ...options, authors: res.data.data })
    );
    axios.get("http://localhost:8080/api/v1/all").then((res) =>
      //console.log(res.data)
      setOptions({
        ...options,
        meme_ids: res.data.data.map((item) => item._id),
      })
    );
    axios.get("http://localhost:8080/api/v1/quotes/all").then((res) =>
      //console.log(res.data)
      setOptions({
        ...options,
        quotes_ids: res.data.data.map((item, index) => index),
      })
    );
  });

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
                    <option value="meme">Memes</option>
                    <option value="quote">Quote</option>
                  </select>
                </div>

                {form.type === "meme" ? (
                  <div className="label-input-div">
                    <label>Select a Tag </label>
                    <select name="tag" value={form.tag} onChange={handleForm}>
                      <option></option>
                      {options.tags.map((tag) => (
                        <option value={tag}>{tag}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="label-input-div">
                    <label>Select Author </label>
                    <select name="tag" value={form.tag} onChange={handleForm}>
                      <option> </option>
                      {options.authors.map((author) => (
                        <option value={author}>{author}</option>
                      ))}
                    </select>
                  </div>
                )}

                {form.type === "meme" ? (
                  <div className="label-input-div">
                    <label>Id</label>
                    <select
                      name="id"
                      value={form.id}
                      onChange={form.tag || form.author ? "" : handleForm}>
                      <option disabled></option>
                      {options.meme_ids.map((id) => (
                        <option value={id}>{id}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="label-input-div">
                    <label>Id</label>
                    <select
                      name="id"
                      value={form.id}
                      onChange={form.tag || form.author ? "" : handleForm}>
                      <option disabled></option>
                      {options.quotes_ids.map((id) => (
                        <option value={id}>{id}</option>
                      ))}
                    </select>
                  </div>
                )}
                {/* <button >Get Url</button> */}
              </form>
            </div>
          </div>
        </section>
        <div
        id="code-box"
          className=" my-4 m-auto w-50 ">
          <SyntaxHighlighter
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap", textAlign: 'center' },
            }}
            wrapLines={true}
            language="javascript"
            style={dark}>
            {`${baseUrl}/${form.type}/${form.author || form.tag}/${form.id}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
export default SandboxPage;
