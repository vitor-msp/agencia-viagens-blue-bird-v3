import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { InputSetPassword } from "./InputSetPassword";
import { SpinnerBtn } from "./SpinnerBtn";
import { validateForm } from "../../helpers/validateForm";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { createClient } from "../../api/api";

const objDefaultFields = {
  name: null,
  rg: null,
  cpf: null,
  birthDate: null,
  email: null,
  password: null,
};

export function FormRegister() {
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const [spinner, setSpinner] = useState(false);
  const [disableFields, setDisableFields] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      setDisableFields(true);
      setSpinner(true);
      setTimeout(async () => {
        try {
          const res = await createClient(fields);
          if (res.status === 200) {
            dispatch(
              updateModalInfo("Sua conta foi criada com sucesso!!", true)
            );
            document.getElementById("navLoginModal").click();
          } else if (
            res.status === 400 &&
            res.data.message.trim() === "emailJaEmUso"
          ) {
            dispatch(
              updateModalInfo("O e-mail selecionado já está em uso!", false)
            );
          } else {
            dispatch(updateModalInfo("Erro ao efetuar o cadastro!", false));
          }
        } catch {
          dispatch(
            updateModalInfo("Falha na comunicação com o servidor!", false)
          );
        }
        setDisableFields(false);
        setSpinner(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setShowValidations((prev) => (prev === false ? null : false));
    setFields(objDefaultFields);
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="my-3">
        <InputDefault
          name={"Nome"}
          type={"text"}
          maxLength={50}
          defaultClass={"col-md-12"}
          showValidations={showValidations}
          defaultValue={objDefaultFields.name}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              name: value,
            });
          }}
          disabled={disableFields}
        />
        <InputDefault
          name={"RG"}
          type={"text"}
          maxLength={10}
          defaultClass={"col-md-6"}
          showValidations={showValidations}
          defaultValue={objDefaultFields.rg}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              rg: value,
            });
          }}
          disabled={disableFields}
        />
        <InputCpf
          showValidations={showValidations}
          defaultValue={objDefaultFields.cpf}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              cpf: value,
            });
          }}
          disabled={disableFields}
        />
        <InputDefault
          name={"Data de Nascimento"}
          type={"date"}
          maxLength={null}
          defaultClass={"col-md-6"}
          showValidations={showValidations}
          defaultValue={objDefaultFields.birthDate}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              birthDate: value,
            });
          }}
          disabled={disableFields}
        />
        <InputEmail
          showValidations={showValidations}
          defaultValue={objDefaultFields.email}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              email: value,
            });
          }}
          disabled={disableFields}
        />
        <InputSetPassword
          showValidations={showValidations}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              password: value,
            });
          }}
          disabled={disableFields}
        />
      </Row>
      <Form.Group className="mb-3 d-flex flex-nowrap">
        <input
          type="reset"
          disabled={disableFields}
          value={"Limpar"}
          className="btn btn-secondary w-100"
          style={{ marginRight: "5px" }}
          onClick={handleReset}
        />
        <SpinnerBtn
          value="Criar conta"
          loading={spinner}
          className="btn btn-primary w-100"
          style={{ marginLeft: "5px" }}
        />
      </Form.Group>
    </Form>
  );
}
