import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputDefault } from "./InputDefault";
import { InputCpf } from "./InputCpf";
import { InputEmail } from "./InputEmail";
import { SpinnerBtn } from "./SpinnerBtn";
import { ModalSetPassword } from "../modals/ModalSetPassword";
import { ModalAuth } from "../modals/ModalAuth";
import {
  insertClientData,
  updateClientData,
} from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";
import { validateForm } from "../../helpers/validateForm";
import { getClient, updateClient } from "../../api/api";

export function FormMyAccount() {
  const objDefaultFields = useSelector((state) => state.clientData);
  const [showValidations, setShowValidations] = useState(false);
  const [fields, setFields] = useState(objDefaultFields);
  const [isEdit, setIsEdit] = useState(false);
  const [showModalSetPassword, setShowModalSetPassword] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [disableFields, setDisableFields] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const reqClientData = async () => {
      try {
        const res = await getClient();
        if (res.status === 200) {
          dispatch(insertClientData(res.data));
          setFields(res.data);
        } else {
          dispatch(
            updateModalInfo("Erro ao obter os dados do usuário!", false)
          );
        }
      } catch (error) {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
    };

    if (objDefaultFields.name === undefined || objDefaultFields.name === null) {
      reqClientData();
    }
  }, []);

  useEffect(() => {
    setShowValidations((prev) => (prev === false ? null : false));
  }, [objDefaultFields]);

  const handleCancelEdit = () => {
    setIsEdit(false);
    setShowValidations((prev) => (prev === false ? null : false));
  };

  const handleEdit = () => {
    setIsEdit(true);
    setShowValidations(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowValidations(true);
    if (validateForm(fields)) {
      setShowAuth(true);
    }
  };

  const handleUpdateClient = (pass) => {
    setDisableFields(true);
    setSpinner(true);
    setTimeout(async () => {
      const clientToUpdate = Object.assign({}, fields);
      clientToUpdate.password = pass;
      try {
        const res = await updateClient(clientToUpdate);
        if (res.status === 200) {
          dispatch(updateClientData(fields));
          dispatch(updateModalInfo("Dados atualizados com sucesso!!", true));
          handleCancelEdit();
        } else if (
          res.status === 400 &&
          res.data.message.trim() === "senhaIncorreta"
        ) {
          dispatch(updateModalInfo("Senha incorreta!", false));
        } else {
          dispatch(updateModalInfo("Erro na atualização dos dados!", false));
        }
      } catch {
        dispatch(updateModalInfo("Erro na comunicação com o servidor!", false));
      }
      setDisableFields(false);
      setSpinner(false);
    }, 1000);
  };

  useEffect(() => {
    isEdit ? setDisableFields(false) : setDisableFields(true);
  }, [isEdit]);

  return (
    <>
      <Form
        id="formMyAccount"
        noValidate
        onSubmit={handleSubmit}
        className="col-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6"
      >
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
            disabled={!isEdit || disableFields}
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
            disabled={!isEdit || disableFields}
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
            disabled={!isEdit || disableFields}
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
            disabled={!isEdit || disableFields}
          />
          <InputEmail
            showValidations={showValidations}
            defaultValue={objDefaultFields.email}
            handleFieldChange={() => {}}
            disabled={true}
          />
          <Form.Group className="my-2 col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setShowModalSetPassword(true);
              }}
            >
              Alterar Senha
            </button>
          </Form.Group>
        </Row>
        {isEdit ? (
          <Form.Group className="mb-3 d-flex justify-content-center">
            <button
              type="button"
              disabled={disableFields}
              className="btn btn-secondary"
              style={{ marginRight: "5px" }}
              onClick={handleCancelEdit}
            >
              Cancelar
            </button>
            <SpinnerBtn
              value="Salvar"
              loading={spinner}
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
            />
          </Form.Group>
        ) : (
          <Form.Group className="mb-3 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-secondary"
              style={{ marginRight: "5px" }}
            >
              Voltar
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginLeft: "5px" }}
              onClick={handleEdit}
            >
              Editar
            </button>
          </Form.Group>
        )}
      </Form>
      {showModalSetPassword && (
        <ModalSetPassword
          showModal={(show) => {
            setShowModalSetPassword(show);
          }}
        />
      )}
      {showAuth && (
        <ModalAuth
          showModal={(show) => {
            setShowAuth(show);
          }}
          passModal={(value) => {
            handleUpdateClient(value);
          }}
        />
      )}
    </>
  );
}
