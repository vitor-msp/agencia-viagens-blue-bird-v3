import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Nav } from "react-bootstrap";
import { showModalLogin } from "../../store/actions/modalLogin.actions";
import { FormLogin } from "../forms/FormLogin";
import { FormRegister } from "../forms/FormRegister";

export function ModalLogin() {
  const [modalOpen, setModalOpen] = useState(true);
  const [nav, setNav] = useState("login");
  const dispatch = useDispatch();

  const handleClose = () => {
    setModalOpen(false);
    dispatch(showModalLogin(false));
  };

  return (
    <Modal show={modalOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="text-primary">Acessar</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Nav variant="tabs" defaultActiveKey="login">
          <Nav.Item>
            <Nav.Link
              eventKey="login"
              onClick={() => {
                setNav("login");
              }}
              id="navLoginModal"
            >
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="register"
              onClick={() => {
                setNav("register");
              }}
            >
              Registrar
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {nav === "login" ? (
          <FormLogin closeModal={handleClose} />
        ) : (
          <FormRegister />
        )}
      </Modal.Body>
    </Modal>
  );
}
