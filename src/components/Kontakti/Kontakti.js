import React from 'react';
import styles from "./Kontakti.module.css"

const Kontakti = () => {
    return (
        <div className={styles.container}>
            <div className={styles.divPhone}>
                <a className={styles.phone}>Phone: 8-968-858-82-38</a>
            </div>    
            <div className={styles.divTelegram}>
                <a className={styles.telegram}>Telegram: RETAIL_MANAGER</a>
            </div>
        </div>
    );
}

export default Kontakti;