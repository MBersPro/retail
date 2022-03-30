import React from "react";
import styles from "./Kontakti.module.css";

const Kontakti = () => {
  return (
        <div className={styles.container}>
            <div className={styles.backgroundContacts}>
                <div className={styles.divContacts}>
                    <a href="tel:+79688588238" className={styles.phone}>
                    Номер: +79688588238
                    </a>
                    <a
                    href="tg://resolve?domain=retail_manager"
                    className={styles.telegram}
                    >
                    Telegram: RETAIL_MANAGER
                    </a>
                    <a 
                    href="https://wa.me/79688588238" 
                    className={styles.WhatsApp}>
                    WhatsApp: +79688588238
                    </a>
                </div>
            </div>
        </div>
  );
};

export default Kontakti;
