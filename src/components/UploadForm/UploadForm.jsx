/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.css";
import axios from "axios";
import { config } from "dotenv";
import { tagOptions } from "../../assets/endPoints";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function UploadForm() {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [form, setForm] = useState({ created_by: "", tag: "" });
  const [memeUrl, setMemeUrl] = useState();


const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;
const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = async (e) => {
    const image = e.target.files[0];

    setImage(image);

    //console.log(image);

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "vegan_meme_api");

    try {
      const response = await axios.post(
        CLOUDINARY_URL,
        formData
      );
      setMemeUrl(response.data.url);
      //console.log(response.data.url);
    } catch (error) {
      console.error(error);
    }


  };

  const handleApi = async (e) => {

    e.preventDefault();

    try {
          await axios.post(UPLOAD_URL, {
            created_by: form.created_by,
            meme_url: memeUrl,
            tag: form.tag,
          });

          //alert("Meme successfully uploaded! 👍");
          toast.success('Meme uploaded! 👍',  {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    } catch (error) {

    }

     // console.log('meme successfully uploaded! 👍')
  };


  return (
    <>
      <h1>Upload Meme 🖼️</h1>
      <div className="upload-section">
        <section className="">
          <div className="main-container">
            <div className="">
              <form className="form">
                <div className="label-input-div">
                  <label htmlFor="file">Select a meme</label>
                  <input
                    id="file-field"
                    type="file"
                    name="file"
                    onChange={(e) => handleImage(e)}
                  />
                </div>
                <div className="label-input-div">
                  <label>Created By</label>
                  <input
                    type="text"
                    name="created_by"
                    value={form.created_by}
                    onChange={handleForm}
                  />
                </div>
                <div className="label-input-div">
                  <label>Tag</label>
                  <select name="tag" value={form.tag} onChange={handleForm}>
                    {tagOptions.map((tag) => (
                      <option value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
                <button onClick={handleApi}>Upload</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
}

export default UploadForm;
