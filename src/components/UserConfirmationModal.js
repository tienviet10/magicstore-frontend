import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const UserConfirmationModal = ({ show, handleClose, winner }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{winner === "N" ? "Result:" : "Woohoo!"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {winner === "N"
          ? "It is a draw"
          : "Congratulation, the winner is player " + winner + "!"}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
