import React from "react";
import styles from "./StoreExclusive.module.css";



const StoreExclusive = () => {
  return (
    <div className={styles.container}>
      <p className={styles.p}>Магазин высококачественной одежды</p>

      <div className={styles.contdivbox}>
        <div className={styles.divbox1}>
          <div className={styles.box1}></div>
          <div className={styles.box2}>
            <p className={styles.box2p}>COATS & JACKETS</p>
          </div>
        </div>
        <div className={styles.divbox2}>
          <div className={styles.box3}>
            <p className={styles.box3p}>SPORT</p>
          </div>
          <div className={styles.box4}></div>
        </div>
      </div>
    </div>
  );
};

export default StoreExclusive;
