import { useState } from "react";
import "./UploadForm.css";
import axios from "axios";
import { config } from "dotenv";

function UploadForm() {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({created_by:'', tag: ''})
  const [memeUrl, setMemeUrl] = useState();
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/benjahmin/image/upload";
  const SERVER_URL = "http://localhost:8080/api/v1/add";
  const CLOUDINARY_UPLOAD_PRESET = "vegan_meme_api";


  const handleForm = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    console.log(image);
  };

  const handleApi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "vegan_meme_api");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/benjahmin/image/upload",
        formData
      );
      setMemeUrl(response.data.url);
      console.log(response.data.url);
    } catch (error) {
      console.error(error);
    }


   await axios.post(SERVER_URL, {
        created_by: form.created_by,
        meme_url: memeUrl,
        tag: form.tag,
    })

  };

  return (
    <>
      <h1>Upload Meme 🖼️</h1>
      <div className="upload-section">
        <section className="">
          <div className="main-container">
            <div className="">
              <form>
                <div className="label-input-div">
                  <label htmlFor="file">Select a meme</label>
                  <input
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
                    <option value="humor" id="">
                      Humor
                    </option>
                    <option value="excuses" id="">
                      Excuses
                    </option>
                    <option value="carnism" id="">
                      Carnism
                    </option>
                    <option value="speciesism" id="">
                      Speciesism
                    </option>
                    <option value="protein" id="">
                      Protien
                    </option>
                    <option value="cignitive dissonance" id="">
                      Cognitive dissonance
                    </option>
                    <option value="food" id="">
                      Food
                    </option>
                    <option value="enviroment" id="">
                      Enviroment
                    </option>
                    <option value="health" id="">
                      Health
                    </option>
                  </select>
                </div>
                <button onClick={handleApi}>Upload</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UploadForm;
