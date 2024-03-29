import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Card from "./Card";

function Modal({ isInvalid, setIsInvalid, invalidMessage }) {
  const handleCloseModal = () => {
    setIsInvalid(false);
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={`${
          isInvalid ? styles.modal + styles.invalid : styles.modal
        }`}
      >
        <div className={styles.overlay} onClick={handleCloseModal}></div>

        <div className={styles["modal__popup"]}>
          <Card>
            <h2 className={styles["modal__heading"]}>Invalid Input</h2>
            <p className={styles["modal__message"]}>{invalidMessage}</p>
            <button className={`${styles.btn} btn`} onClick={handleCloseModal}>
              Okay
            </button>
          </Card>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
