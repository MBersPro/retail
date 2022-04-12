import React, { useEffect } from "react";
import styles from "./ModalProduct.module.css";

const ModalProduct = ({
  modalImages,
  currentImageIndex,
  rotationRight,
  rotationLeft,
  modalClose,
  modalClickClose,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", modalClose);
    return () => {
      window.removeEventListener("keydown", modalClose);
    };
  });

  const onRotationRight = () => {
    rotationRight();
  };

  const onRotationLeft = () => {
    rotationLeft();
  };

  const onModalClose = (e) => {
      modalClickClose()
  };

  return (
    <div id="12" className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.l} onClick={onRotationLeft}>
          L
        </div>
        <img
          className={styles.img}
          src={modalImages[currentImageIndex]}
          alt="some"
        />
        <div className={styles.r} onClick={onRotationRight}>
          R
        </div>
        <button className={styles.close} onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalProduct;
