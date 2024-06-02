import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button"; // Ensure to import Button component
import classes from "./ErrorModal.module.css"; // Fixed the import path

const ErrorModal = forwardRef(({ errorMessage, onClose }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  return createPortal(
    <>
      <div className={classes.backdrop}></div>
      <dialog ref={dialogRef} className={classes.modal}>
        <header className={classes.header}>
          <h2>{errorMessage.title}</h2>
        </header>
        <p className={classes.content}>{errorMessage.message}</p>
        <div className={classes.actions} method="dialog">
          <Button onClick={onClose}>
            Okay
          </Button>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});

export default ErrorModal;
