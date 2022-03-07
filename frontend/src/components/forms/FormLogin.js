import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputEmail } from "./InputEmail";
import { insertClientEmail } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";
import { SpinnerBtn } from "./SpinnerBtn";
import { login } from "../../api/api";
import { isLogged } from "../../helpers/isLogged";

const objDefaultFields = {
  email: null,
  password: null,
};

export function FormLogin({ closeModal }) {
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
          const res = await login(fields);
          if (res.status === 200) {
            localStorage.setItem("BBJwtInfo", JSON.stringify(res.data));
            const clientEmail = isLogged();
            if (clientEmail !== null) {
              dispatch(insertClientEmail(clientEmail));
            }
            closeModal();
            dispatch(updateModalInfo("Login efetuado com sucesso!!", true));
          } else if (
            res.status === 400 &&
            res.data.message.trim() === "emailOuSenhaIncorretos"
          ) {
            dispatch(updateModalInfo("Usuário e/ou senha incorretos!", false));
            handleReset();
          } else {
            dispatch(updateModalInfo("Erro ao efetuar o login!", false));
            handleReset();
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
      <Row>
        <img
          src={`${require(`../../images/avatar.png`)}`}
          alt="Avatar"
          title="Avatar"
          width={512}
          height="auto"
          style={{ width: "40%" }}
          className="mx-auto mt-4"
        />
      </Row>
      <Row className="my-3">
        <InputEmail
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              email: value,
            });
          }}
          disabled={disableFields}
        />
        <InputDefault
          name={"Senha"}
          type={"password"}
          maxLength={30}
          defaultClass={"col-md-12"}
          showValidations={showValidations}
          defaultValue={null}
          handleFieldChange={(value) => {
            setFields({
              ...fields,
              password: value,
            });
          }}
          disabled={disableFields}
        />
      </Row>
      <Form.Group className="mb-3">
        <SpinnerBtn
          value="Logar"
          loading={spinner}
          className="btn btn-primary w-100"
        />
      </Form.Group>
    </Form>
  );
}
