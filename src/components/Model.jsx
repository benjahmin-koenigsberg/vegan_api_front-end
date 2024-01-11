/** @format */
import { Modal, Button } from "react-bootstrap";


function Model({handleClose, preview, endpoint, show, handlePreview}) {
  return (
    <Modal show={show} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
        endpoint.type === "meme" ?
        (
        <div className="text-center">
          <img src={preview.url} />
        </div>
        ) : (
          <div className="text-center m-auto p-5">
            <blockquote className="">{preview.quote}</blockquote>
            <p className="">- {preview.author}</p>
          </div>
        )
        }
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
