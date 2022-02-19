import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { clearModalInfo } from "../../store/actions/modalInfo.actions";

export function ModalInfo({ content }) {
  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useDispatch();
  const { info, primary } = content;

  const handleClose = () => {
    setModalOpen(false);
    dispatch(clearModalInfo());
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className={primary ? "text-primary" : "text-secondary"}>
            {primary ? "Sucesso" : "Erro"}
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>{info}</h5>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          onClick={handleClose}
          className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
        >
          Entendi
        </button>
      </Modal.Footer>
    </Modal>
  );
}
