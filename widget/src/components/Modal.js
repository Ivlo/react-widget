import React from "react";

const Modal = ({ children, onClickClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">{children}</div>
      <span href="" onClick={onClickClose} className="modal__action">
        X
      </span>
    </div>
  );
};

export default Modal;
