import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
function Modal({ openModal, closeModal }) {
  if (!openModal) return null;
  return (
    <div className="overlay" onClick={closeModal}>
      <section
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="modal-header">
          <h2>Modal form</h2>
          <button>
            <AiFillCloseSquare
              className="modal-close-icon"
              onClick={closeModal}
            />
          </button>
        </header>
        <article></article>
        <footer className="modal-footer">
          <button className="btn save">Action</button>
          <button className="btn close" onClick={closeModal}>
            Close
          </button>
        </footer>
      </section>
    </div>
  );
}

export default Modal;
