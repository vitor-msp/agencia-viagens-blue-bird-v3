import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormAuth } from "../forms/FormAuth";

export function ModalAuth({ showModal, passModal }) {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
    showModal(false);
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-primary">Autenticação</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormAuth
          closeModal={handleClose}
          passForm={(pass) => {
            passModal(pass);
          }}
        />
      </Modal.Body>
    </Modal>
  );
}
