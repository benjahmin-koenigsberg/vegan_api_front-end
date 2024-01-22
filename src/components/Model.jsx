/** @format */
import { Modal, Button } from "react-bootstrap";



function Model({handleClose, preview, endpoint, show, handlePreview}) {
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {endpoint.type === "meme" ? (
          <main className="text-center d-flex justify-content-center align-items-center">
            <img
              src={preview?.url}
              className="img-fluid"
              alt={preview?.file_name}
            />
          </main>
        ) : (
          <main className="text-center m-auto p-5"
          >
            <blockquote
              style={{ fontFamily: "Josefin Sans", fontSize: '1.5rem'}}>
              " {preview.quote} "
            </blockquote>
            <p className="">- {preview.author}</p>
          </main>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center gap-5">
        <Button variant="secondary" onClick={handleClose}>
          ❌
        </Button>
        <Button variant="primary" onClick={handlePreview}>
          🔄
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Model;
