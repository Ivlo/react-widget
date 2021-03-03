import React from "react";

const Modal = ({ children, onClickClose }) => {
  return (
    <div>
      {children}
      <span onClick={onClickClose}>Close Modal</span>
    </div>
  );
};

export default Modal;
