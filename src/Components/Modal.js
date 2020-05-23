import React from "react";

const Modal = ({ show, onClose }) => {
  const renderModal = () => {
    return (
      <section className="modal">
        <button onClick={() => onClose()} className="close-modal-btn">
          &times;
        </button>
      </section>
    );
  };

  return show ? renderModal() : null;
};

export default Modal;
