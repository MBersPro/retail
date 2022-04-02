import React from "react";
import styles from "./AboutUs.module.css";
const AboutUs = ({changePage}) => {
  const onChangePage = (e) => {
    const page = e.target.name;
    changePage(page);
  };
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <p className={styles.p}>
          На нашем сайте Вы найдете для себя <br/> 
          интересный ассортимент качественной<br/>
          брендовой одежды.
        </p>
        <p className={styles.p2}><b>Оплата заказа после примерки.</b></p>
        <button
          type="button"
          name="katalog"
          onClick={onChangePage}
          className={styles.button}
        >
          Перейти в каталог
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
