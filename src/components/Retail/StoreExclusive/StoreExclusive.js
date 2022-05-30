import React from "react";
import styles from "./StoreExclusive.module.css";

import snikers from "./img/snikers.jpg";
import top from "./img/Top.jpg";
import suits from "./img/suits.jpg";
import jogger from "./img/jogger.jpg";

const StoreExclusive = ({ changePage, setFilter }) => {
  const onLinkFilter = (e) => {
    const value = e.target.id;
    changePage("katalog");
    setFilter(value);
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.p}>Магазин высококачественной одежды</p>

      <div className={styles.contdivbox}>
        <div className={styles.divbox1}>
          <div className={styles.box1}>
            <img
              id="pants"
              src={jogger}
              alt="ДЖОГГЕРЫ"
              className={styles.image}
              onClick={onLinkFilter}
            />
            <p className={styles.box1p}>ДЖОГГЕРЫ</p>
          </div>
          <div className={styles.box2}>
            <img
              id="outerwear"
              onClick={onLinkFilter}
              className={styles.image}
              src={top}
              alt="ВЕРХНЯЯ ОДЕЖДА"
            />
            <p className={styles.box2p}>ВЕРХНЯЯ ОДЕЖДА</p>
          </div>
        </div>
        <div className={styles.divbox2}>
          <div className={styles.box3}>
            <img
              id="sneakers"
              onClick={onLinkFilter}
              className={styles.image}
              src={snikers}
              alt="КРОССОВКИ"
            />
            <p className={styles.box3p}>КРОССОВКИ</p>
          </div>
          <div className={styles.box4}>
            <p className={styles.box4p}>КОСТЮМЫ</p>
            <img
              id="clothes"
              onClick={onLinkFilter}
              src={suits}
              className={styles.image}
              alt="КОСТЮМЫ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreExclusive;
