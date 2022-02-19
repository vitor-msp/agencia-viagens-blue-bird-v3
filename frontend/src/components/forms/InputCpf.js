import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputCpf({ defaultValue, showValidations, handleFieldChange,disabled = false }) {
  const [currentValue, setCurrentValue] = useState(
    !defaultValue ? "" : defaultValue
  );
  const [showValidation, setShowValidation] = useState(showValidations);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setShowValidation(showValidations);
    if(!showValidations){
      setCurrentValue(!defaultValue ? "" : defaultValue);
    }
  }, [showValidations]);

  useEffect(() => {
    if (validateField(currentValue)) {
      setIsValid(true);
      handleFieldChange(currentValue);
    } else {
      setIsValid(false);
      handleFieldChange(null);
    }
  }, [currentValue]);

  const validateField = (value) => {
    if (value.trim().length === 0 || value.length !== 11) {
      return false;
    }
    return true;
  };

  const onInputChange = (value) => {
    setCurrentValue(value);
    setShowValidation(true);
  };

  return (
    <Form.Group className="mb-2 col-md-6">
      <Form.Label>CPF:</Form.Label>
      <Form.Control
        required
        disabled={disabled}
        type="text"
        placeholder={`Digite seu CPF...`}
        maxLength={11}
        value={currentValue}
        onChange={(event) => {
          onInputChange(event.target.value.replace(/\D/gim, ""));
        }}
        isValid={showValidation === true && isValid === true ? true : false}
        isInvalid={showValidation === true && isValid === false ? true : false}
      />
      <Form.Control.Feedback type="valid">CPF ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Um CPF válido é necessário!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
