import React from "react";

const Modal = ({ show, onClose }) => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
    padding: "1.6rem",
    backgroundColor: "white",
    width: "300px",
  };

  const modalWrapper = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 99,
  };

  const modalInner = {
    position: "relative",
    boxSizing: "border-box",
    paddingTop: "1rem",
  };

  const closeBtn = {
    position: "absolute",
    top: "-2rem",
    left: "-1rem",
    fontSize: "2rem",
  };

  const renderModal = () => {
    return (
      <>
        <section className="modal-wrapper" style={modalWrapper}>
          <div className="modal" style={modalStyles}>
            <div className="modal-inner" style={modalInner}>
              <button
                onClick={() => onClose()}
                style={closeBtn}
                className="close-modal-btn"
              >
                &times;
              </button>
              <p>Hello</p>
            </div>
          </div>
        </section>
      </>
    );
  };

  return show ? renderModal() : null;
};

export default Modal;
