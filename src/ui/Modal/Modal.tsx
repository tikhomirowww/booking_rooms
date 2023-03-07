import React, { FC } from "react";
import { IModal } from "./Modal.types";
import Button from "../Button/Button";
import "./adaptiveModal.css";
import "./Modal.css";

const Modal: FC<IModal> = ({
  title,
  children,
  button,
  error,
  onClose,
  onClick,
  isOpen,
}) => {
  return (
    <div>
      {isOpen && (
        <div>
          <div onClick={onClose} className="modal_bg" />
          <div className="modal">
            <h3>{title}</h3>
            {error && <i>{error}</i>}
            <div className="modal_children">{children}</div>
            <Button variant="outlined" className="modal_btn" onClick={onClick}>
              {button}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
