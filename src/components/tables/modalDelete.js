import React from 'react';
import Modal from "react-bootstrap/Modal";
//import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

function DeleteModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Delete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>No</Button>
          <Button variant="secondary" onClick={props.onConfirm}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default DeleteModal;