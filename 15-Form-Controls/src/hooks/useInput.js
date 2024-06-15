import { useState } from "react";

export default function useInput(initialValue, validationFn) {
  const [enteredValues, setEnteredValues] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValues); 

  function handleInputChange(event) {
    setEnteredValues(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValues,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  }
}
