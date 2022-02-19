import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export function InputDefault({
  id = null,
  name,
  type,
  maxLength,
  defaultClass,
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
    <Form.Group className={`mb-2 ${defaultClass}`}>
      <Form.Label>{name}:</Form.Label>
      <Form.Control
        id={id}
        required
        disabled={disabled}
        type={type}
        placeholder={`Digite o(a) ${name.toLowerCase()}...`}
        maxLength={maxLength}
        value={currentValue}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        isValid={showValidation === true && isValid === true ? true : false}
        isInvalid={showValidation === true && isValid === false ? true : false}
      />
      <Form.Control.Feedback type="valid">{name} ok!</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        O(A) {name.toLowerCase()} é necessário(a)!
      </Form.Control.Feedback>
    </Form.Group>
  );
}
