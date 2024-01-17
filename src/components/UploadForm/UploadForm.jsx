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
  const [memeInfo, setMemeInfo] = useState({memeUrl: '', file_name: '',  asset_id: '',  width: "", height: '', });


const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080'
const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL || "http://localhost:8080/api/v1/meme/add";

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
      setMemeInfo({
        memeUrl: response.data.url,
        file_name: response.data.original_filename,
        width: response.data.width,
        height: response.data.height,
        type: response.data.type,
        asset_id: response.data.asset_id,
      });
      //console.log(response.data.url);
    } catch (error) {
      console.error(error);
    }


  };

  const handleApi = async (e) => {

    if (form.memeUrl === '' ){
      toast.error('Please upload a meme before submitting')
      return;
    }

    e.preventDefault();

    try {
          await axios.post(UPLOAD_URL, {
            created_by: form.created_by,
            meme_url: memeInfo.memeUrl,
            file_name: memeInfo.file_name,
            tag: form.tag,
            height: memeInfo.height,
            width: memeInfo.width,
            asset_id: memeInfo.asset_id,
            type: memeInfo.type

          });

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
