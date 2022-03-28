import React from 'react';
import styles from "./Kontakti.module.css"
import { ReactComponent as Phone } from "./svg/Phone.svg";
import { ReactComponent as Telegram } from "./svg/Telegram.svg";
const Kontakti = () => {
    return (
        <div className={styles.container}>
            <div className={styles.divPhone}>
                <Phone/>
                <p className={styles.phone}>8-968-858-82-38</p>
            </div>    
            <div className={styles.divTelegram}>
                <Telegram/>
                <p className={styles.telegram}>shuePro</p>
            </div>
        </div>
    );
}

export default Kontakti;