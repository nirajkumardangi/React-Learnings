import { useRef, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

export default function AddUser({ onAddUser }) {
  const modalRef = useRef();

  const [userInputName, setUserInputName] = useState("");
  const [userInputAge, setUserInputAge] = useState("");
  const [error, setError] = useState();

  function handleNameChange(event) {
    setUserInputName(event.target.value);
  }

  function handleAgeChange(event) {
    setUserInputAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userInputAge.trim().length === 0 || userInputName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      if (modalRef.current) {
        modalRef.current.open();
      }
      return;
    }
    if (+userInputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      if (modalRef.current) {
        modalRef.current.open();
      }
      return;
    }

    onAddUser(userInputName, userInputAge);
    setUserInputAge("");
    setUserInputName("");
  }

  function handleModalClose() {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal
          ref={modalRef}
          errorMessage={error}
          onClose={handleModalClose}
        />
      )}
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={classes.input}>
            <label>
              Username:
              <input
                type="text"
                value={userInputName}
                onChange={handleNameChange}
              />
            </label>
            <label>
              Age(Years):
              <input
                type="number"
                value={userInputAge}
                onChange={handleAgeChange}
              />
            </label>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
}
