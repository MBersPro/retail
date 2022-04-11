import React from "react";
import styles from "./ModalProduct.module.css";

const ModalProduct = ({
  modalImages,
  currentImageIndex,
  rotationRight,
  rotationLeft,
}) => {
  const onRotationRight = () => {
    rotationRight();
  };

  const onRotationLeft = () => {
    rotationLeft();
  };

  return (
    <div className={styles.overlay}>
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
      </div>
    </div>
  );
};

export default ModalProduct;
