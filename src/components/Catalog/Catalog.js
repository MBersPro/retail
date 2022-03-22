import React from "react";
import styles from "./Catalog.module.css";
import First from "./first.png";
import Second from "./second.png";
const Catalog = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <img src={First} alt="name" />
          <p className={styles.clothingname}>Licity jely leg flat Sandals</p>
          <p className={styles.price}>
            $<span className={styles.crossedoutprice}>30</span>
            <span className={styles.realprice}>$23.00</span>
          </p>
        </li>
        <li>
          <img src={Second} alt="name" />
          <p className={styles.clothingname}>Licity jely leg flat Sandals</p>
          <p className={styles.price}>
            $<span className={styles.crossedoutprice}>30</span>
            <span className={styles.realprice}>$23.00</span>
          </p>
        </li>
        <li>
          <img src={First} alt="name" />
          <p className={styles.clothingname}>Licity jely leg flat Sandals</p>
          <p className={styles.price}>
            $<span className={styles.crossedoutprice}>30</span>
            <span className={styles.realprice}>$23.00</span>
          </p>
        </li>
        <li>
          <img src={Second} alt="name" />
          <p className={styles.clothingname}>Licity jely leg flat Sandals</p>
          <p className={styles.price}>
            $<span className={styles.crossedoutprice}>30</span>
            <span className={styles.realprice}>$23.00</span>
          </p>
        </li>
      </ul>
      <button className={styles.button}>Перейти в каталог</button>
    </div>
  );
};

export default Catalog;
