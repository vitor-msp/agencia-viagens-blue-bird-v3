import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormSetPassword } from "../forms/FormSetPassword";

export function ModalSetPassword({ showModal }) {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
    showModal(false);
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-primary">Alterar Senha</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormSetPassword modalClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}
