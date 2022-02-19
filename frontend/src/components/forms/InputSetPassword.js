import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputSetPassword({
  showValidations,
  handleFieldChange,
  disabled = false,
}) {
  const [currentPass, setCurrentPass] = useState("");
  const [currentConfPass, setCurrentConfPass] = useState("");
  const [showValidation, setShowValidation] = useState(showValidations);
  const [isValidPass, setIsValidPass] = useState(false);
  const [isValidConfPass, setIsValidConfPass] = useState(false);

  useEffect(() => {
    setShowValidation(showValidations);
    if (!showValidations) {
      setCurrentPass("");
      setCurrentConfPass("");
    }
  }, [showValidations]);

  useEffect(() => {
    if (validatePass(currentPass)) {
      setIsValidPass(true);
    } else {
      setIsValidPass(false);
    }

    if (validateConfPass(currentConfPass)) {
      setIsValidConfPass(true);
    } else {
      setIsValidConfPass(false);
    }

    if (currentPass === currentConfPass) {
      handleFieldChange(currentPass);
    } else {
      handleFieldChange(null);
    }
  }, [currentPass, currentConfPass]);

  const validatePass = (value) => {
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  };

  const validateConfPass = (value) => {
    if (value.trim().length === 0 || currentPass !== value) {
      return false;
    }
    return true;
  };

  const onPassChange = (value) => {
    setCurrentPass(value);
    setShowValidation(true);
  };

  const onConfPassChange = (value) => {
    setCurrentConfPass(value);
    setShowValidation(true);
  };

  return (
    <>
      <Form.Group className="mb-2 col-md-12">
        <Form.Label>Senha:</Form.Label>
        <Form.Control
          required
          disabled={disabled}
          type="password"
          placeholder={`Defina uma senha...`}
          maxLength={30}
          value={currentPass}
          onChange={(event) => {
            onPassChange(event.target.value);
          }}
          isValid={
            showValidation === true && isValidPass === true ? true : false
          }
          isInvalid={
            showValidation === true && isValidPass === false ? true : false
          }
        />
        <Form.Control.Feedback type="valid">Senha ok!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Uma senha é necessária!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2 col-md-12">
        <Form.Label>Confirmação da senha:</Form.Label>
        <Form.Control
          required
          disabled={disabled}
          type="password"
          placeholder={`Confirme sua senha...`}
          maxLength={30}
          value={currentConfPass}
          onChange={(event) => {
            onConfPassChange(event.target.value);
          }}
          isValid={
            showValidation === true && isValidConfPass === true ? true : false
          }
          isInvalid={
            showValidation === true && isValidConfPass === false ? true : false
          }
        />
        <Form.Control.Feedback type="valid">
          Confirmação da senha ok!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Confirmar a senha é necessário!
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
