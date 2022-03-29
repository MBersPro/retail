import React from "react";
import styles from "./Kontakti.module.css";

const Kontakti = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divPhone}>
        <a href="tel:+79688588238" className={styles.phone}>
          Phone: 8-968-858-82-38
        </a>
      </div>
      <div className={styles.divTelegram}>
        <a
          href="tg://resolve?domain=retail_manager"
          className={styles.telegram}
        >
          Telegram: RETAIL_MANAGER
        </a>
      </div>
    </div>
  );
};

export default Kontakti;
