import { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputEmail } from "./InputEmail";
import { InputBody } from "./InputBody";
import { SpinnerBtn } from "./SpinnerBtn";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { contact } from "../../api/api";
import { validateForm } from "../../helpers/validateForm";

export function FormContact() {
  let objDefaultFields = {
    email: useSelector((state) => state.clientData.email),
    subject: null,
    body: null,
  };
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const [spinner, setSpinner] = useState(false);
  const [disableFields, setDisableFields] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setFields({
      ...fields,
      email: objDefaultFields.email,
    });
  }, [objDefaultFields.email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (validateForm(fields)) {
      setDisableFields(true);
      setSpinner(true);
      setTimeout(async () => {
        try {
          const res = await contact(Object.assign({}, fields));
          if (res.status === 200) {
            setShowValidations((prev) => (prev === false ? null : false));
            setFields(objDefaultFields);
            dispatch(updateModalInfo("Contato efetuado com sucesso!", true));
          } else {
            dispatch(updateModalInfo("Erro ao efetuar o contato!", false));
          }
        } catch {
          dispatch(
            updateModalInfo("Erro na comunicação com o servidor!", false)
          );
        }
        setDisableFields(false);
        setSpinner(false);
      }, 1000);
    } else {
      setShowValidations(true);
    }
  };

  const handleReset = () => {
    setShowValidations((prev) => (prev === false ? null : false));
    setFields(objDefaultFields);
  };

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
    >
      <Row className="my-3">
        <InputEmail
          showValidations={showValidations}
          defaultValue={objDefaultFields.email}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              email: value,
            });
          }}
          disabled={
            objDefaultFields.email !== null || disableFields ? true : false
          }
        />
        <InputDefault
          name={"Assunto"}
          type={"text"}
          maxLength={100}
          defaultClass={"col-md-12"}
          showValidations={showValidations}
          defaultValue={objDefaultFields.subject}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              subject: value,
            });
          }}
          disabled={disableFields}
        />
        <InputBody
          showValidations={showValidations}
          defaultValue={objDefaultFields.body}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              body: value,
            });
          }}
          disabled={disableFields}
        />
      </Row>
      <Form.Group className="mb-3  d-flex justify-content-center">
        <input
          type="reset"
          disabled={disableFields}
          value={"Limpar"}
          className="btn btn-secondary"
          style={{ marginRight: "5px" }}
          onClick={handleReset}
        />
        <SpinnerBtn
          value="Enviar"
          loading={spinner}
          className="btn btn-primary"
          style={{ marginLeft: "5px" }}
        />
      </Form.Group>
    </Form>
  );
}
