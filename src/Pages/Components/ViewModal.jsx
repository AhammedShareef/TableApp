import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const ViewModal = ({ selectedItem, showModal, setShowModal }) => {
  console.log(selectedItem);

  const nav = useNavigate();
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem.brand}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedItem.description}</Modal.Body>
        <Modal.Body style={{ display: "flex" }}>
          <img
            style={{ height: "100px", width: "200px" }}
            src={selectedItem.thumbnail}
          />
          <h3>{selectedItem.title}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewModal;
