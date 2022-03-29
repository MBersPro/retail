import React from "react";
import backgroundAboutUs from "./backgroundAboutUs.png";
import styles from "./AboutUs.module.css";
const AboutUs = ({changePage}) => {
  const onChangePage = (e) => {
    const page = e.target.name;
    changePage(page);
  };
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <img
          src={backgroundAboutUs}
          alt="red-screen"
          className={styles.backgroundAboutUs}
        />
        <p className={styles.p}>
          На нашем сайте Вы найдете для себя интересный ассортимент качественной
          брендовой одежды.
        </p>
        <p className={styles.p2}>Оплата заказа после примерки.</p>
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
