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
import { tagOptions, authorOptions, quoteIdsArr } from "../assets/endPoints";

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8080";
let base = '';

function SandboxPage() {

  const [show, setShow] = useState(false)

  const [code, setCode] = useState();

  const [form, setForm] = useState({
    type: "",
    tag: "",
    author: '',
    id: "",
  });

  const [options, setOptions] = useState({
    tags: tagOptions,
    authors: authorOptions,
    meme_ids: [],
    quotes_ids: quoteIdsArr,
  });



  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/all`).then((res) =>
      setOptions({
        ...options,
        meme_ids: res.data.data.map((item) => item._id),
      })
    );
  }, []);


  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCode(base);

  };


if(form.type === 'meme'){
  base = `https://vegan-api-back-end.onrender.com/api/v1`;
} else {
  base = `https://vegan-api-back-end.onrender.com/api/v1/quotes`;

}
    // form.type === 'meme' ? base = `https://vegan-api-back-end.onrender.com/api/v1` : base = `https://vegan-api-back-end.onrender.com/api/v1/quotes`
if (form.tag){
  base = `https://vegan-api-back-end.onrender.com/api/v1/tags/${form.tag}`
} else {
`https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`;
}
    // form.tag !== '' ? base = `https://vegan-api-back-end.onrender.com/api/v1/tags/${form.tag}` : base = `https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`

    // form.author !== '' ? base = `https://vegan-api-back-end.onrender.com/api/v1/qoutes/${form.author}` :  base = `https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`
if(form.author){
  base = `https://vegan-api-back-end.onrender.com/api/v1/qoutes/${form.author}`;
} else {
   base = `https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`;
}
    // {
    //   form.type === "meme" && form.tag
    //     ? setCode({ ...code, mid :`/${form.tag}` })
    //     : setCode({...code, mid :`/id/${form.id}` })
    // }
    //  {
    //    form.type === "quote" && form.author
    //      ? setCode({ ...code, mid: `/authors/${form.author}` })
    //      : setCode({ ...code, mid: `/id/${form.id}` });
    //  }

  const handleShow = (e) => {
    e.preventDefault();
     setCode(()=>base);
    setShow((prev) => !prev);

  };


  return (
    <>
      <Header />
      <h1>URL Sandbox 🧪</h1>
      <div className="upload-section">
        <section className="">
          <div className="main-container">
            <div className="">
              <form className="py-4">
                <FormInput
                  label={"type of content"}
                  name={"type"}
                  value={form.type}
                  optionsArray={["meme", "quote"]}
                  handleForm={handleForm}
                />

                {form.type === "meme" ? (
                  <FormInput
                    name={"tag"}
                    value={form.tag}
                    label={"Tag"}
                    optionsArray={options.tags}
                    handleForm={handleForm}
                  />
                ) : (
                  <FormInput
                    name={"author"}
                    value={form.author}
                    label={"Author"}
                    optionsArray={options.authors}
                    handleForm={handleForm}
                  />
                )}

                {form.tag === "" && form.type === "meme" ? (
                  <FormInput
                    name={"id"}
                    value={form.id}
                    label={"meme Id"}
                    optionsArray={options.meme_ids}
                    handleForm={handleForm}
                  />
                ) : (
                  ""
                )}

                {form.author === "" && form.type === "quote" ? (
                  <FormInput
                    name={"id"}
                    value={form.id}
                    label={"quote Id"}
                    optionsArray={options.quotes_ids}
                    handleForm={handleForm}
                  />
                ) : (
                  ""
                )}

                <button onClick={handleShow} >Get code</button>
              </form>
            </div>
          </div>
        </section>
        <div id="code-box" className=" my-4 m-auto w-50 ">
          { show ? (
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
                 {code}
            </SyntaxHighlighter>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
export default SandboxPage;


