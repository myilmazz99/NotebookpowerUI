import React from "react";

export const Modal = ({ onClose, data, modalName }) => {
  const renderModal = () => {
    return (
      <>
        <section
          className={`modal-wrapper ${modalName}`}
          onClick={(e) =>
            e.target.className.includes("modal-wrapper")
              ? onClose(modalName)
              : ""
          }
        >
          <div className="modal">
            <div className="modal-inner">
              <button
                onClick={() => onClose(modalName)}
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
