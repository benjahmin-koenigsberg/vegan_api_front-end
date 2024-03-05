/** @format */
import Header from "../components/Header/Header";
import { endpoints } from "../assets/endPoints";
import { useState, useEffect } from "react";
import axios from "axios";
import FormInput from "../components/FormInput";
import { tagOptions, authorOptions, quoteIdsArr } from "../assets/endPoints";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";


const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8080";
let base = '';

function SandboxPage() {

  const [show, setShow] = useState(false)

  const [code, setCode] = useState('');

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

  useEffect(()=>{

if (form.type === "meme") {
  base = `https://vegan-api-back-end.onrender.com/api/v1`;
  setCode(`https://vegan-api-back-end.onrender.com/api/v1`);

  if (form.tag) {
    base = `https://vegan-api-back-end.onrender.com/api/v1/tags/${form.tag}`;
    setCode(`https://vegan-api-back-end.onrender.com/api/v1/tags/${form.tag}`);
  } else {
    `https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`;
    setCode(`https://vegan-api-back-end.onrender.com/api/v1/id/${form.id}`);
  }
} else {
  base = `https://vegan-api-back-end.onrender.com/api/v1/quotes`;
  setCode(`https://vegan-api-back-end.onrender.com/api/v1/quotes`);

  if (form.author) {
    base = `https://vegan-api-back-end.onrender.com/api/v1/quotes/${form.author}`;
    setCode(
      `https://vegan-api-back-end.onrender.com/api/v1/quotes/${form.author}`
    );
  } else {
    base = `https://vegan-api-back-end.onrender.com/api/v1/quotes/id/${form.id}`;
    setCode(
      `https://vegan-api-back-end.onrender.com/api/v1/quotes/id/${form.id}`
    );
  }
}

  },[form])


  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleShow = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);

  };

  const copyToClip = () => {
  navigator.clipboard.writeText(code);
    toast.info("url copied to clipboard 📋!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (
    <main>
      <Header />
      <h1>URL Sandbox 🧪</h1>
      <main className="upload-section">
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

                <button onClick={handleShow}>Get code</button>
              </form>
            </div>
          </div>
        </section>
        <div id="code-box" className="m-auto my-4 w-75  ">
          {show ? (
            <div className="d-flex justify-content-center gap-4">
            <div className="d-flex align-items-center gap-2 justify-content-center font-monospace bg-dark text-light px-5 py-2">
              {code}
              </div>
              <svg
                onClick={copyToClip}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-clipboard shadow"
                style={{cursor: 'pointer'}}
                alt="clip board icon"
                viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
      <ToastContainer/>
    </main>
  );
}
export default SandboxPage;
