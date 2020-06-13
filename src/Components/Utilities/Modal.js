import React from "react";

export const Modal = ({ onClose, data, modalName }) => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
    padding: "1.6rem",
    backgroundColor: "white",
  };

  const modalWrapper = {
    display: "none",
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
    cursor: "pointer",
  };

  const renderModal = () => {
    return (
      <>
        <section
          className={`modal-wrapper ${modalName}`}
          style={modalWrapper}
          onClick={(e) =>
            e.target.className.includes("modal-wrapper")
              ? onClose(modalName)
              : ""
          }
        >
          <div className="modal" style={modalStyles}>
            <div className="modal-inner" style={modalInner}>
              <button
                onClick={() => onClose(modalName)}
                style={closeBtn}
                className="close-modal-btn"
              >
                &times;
              </button>
              {typeof data === "function" ? data() : data}
            </div>
          </div>
        </section>
      </>
    );
  };

  return renderModal();
};

export const toggleModal = (modalName) => {
  let modal = document.querySelector("." + modalName);
  if (modal) {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }
};
