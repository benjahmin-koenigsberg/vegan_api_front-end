/** @format */

import "./UploadForm.css";

function UploadForm() {
  return (
    <>
      <h1>Upload Meme 🖼️</h1>
      <div className="upload-section">
        <section className="">
          <div className="main-container">
            <div className="">
              <form>
                <div className="label-input-div">
                  <label>Select a meme</label>
                  <input type="file" />
                </div>
                <div className="label-input-div">
                  <label>Created By</label>
                  <input type="text" />
                </div>
                <div className="label-input-div">
                  <label>Tags</label>
                  <fieldset>
                    <legend>Choose tags</legend>
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag1</label>
                    </div>
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag2</label>
                    </div>{" "}
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag3</label>
                    </div>
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag4</label>
                    </div>
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag5</label>
                    </div>
                    <div className="check-box-div">
                      <input type="checkbox" id="tag1" name="tag1" />
                      <label htmlFor="tag1">Tag6</label>
                    </div>
                  </fieldset>
                </div>
                <button>Upload</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default UploadForm;
