import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, open, className = "" }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
