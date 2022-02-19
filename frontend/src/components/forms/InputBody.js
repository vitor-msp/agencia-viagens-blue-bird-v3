import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputBody({
  defaultValue,
  showValidations,
  handleFieldChange,
  disabled = false,
}) {
  const [currentValue, setCurrentValue] = useState(
    !defaultValue ? "" : defaultValue
  );
  const [showValidation, setShowValidation] = useState(showValidations);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setShowValidation(showValidations);
    if (!showValidations) {
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
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  };

  const onInputChange = (value) => {
    setCurrentValue(value);
    setShowValidation(true);
  };

  return (
    <Form.Group className="mb-2 col-md-12">
      <Form.Label>Mensagem:</Form.Label>
      <Form.Control
        required
        disabled={disabled}
        as="textarea"
        placeholder={`Digite sua mensagem...`}
        maxLength={1000}
        value={currentValue}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        isValid={showValidation === true && isValid === true ? true : false}
        isInvalid={showValidation === true && isValid === false ? true : false}
      />
      <Form.Control.Feedback type="valid">Mensagem ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        Uma mensagem é necessária!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
