import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { InputDefault } from "./InputDefault";
import { validateForm } from "../../helpers/validateForm";

export function FormAuth({ closeModal, passForm }) {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState({ password: null });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      passForm(fields.password);
      closeModal();
    }
  };

  useEffect(() => {
    document.getElementById("inputPassAuth").focus();
  }, []);

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="my-3 ">
          <InputDefault
            id={"inputPassAuth"}
            name={"Senha"}
            type={"password"}
            maxLength={30}
            defaultClass={"col-md-12"}
            showValidations={showValidations}
            defaultValue={null}
            handleFieldChange={(value) => {
              setFields({
                password: value,
              });
            }}
          />
        </Row>
        <Form.Group className="mb-3">
          <input
            type="submit"
            value="Confirmar"
            className="btn btn-primary w-100"
          />
        </Form.Group>
      </Form>
    </>
  );
}
