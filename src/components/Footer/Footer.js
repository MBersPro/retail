import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.logoretail}>RETAIL</h2>
            <p className={styles.p1}><span className={styles.phonekey}>Phone:</span> <span className={styles.phonevalue}>8-968-858-82-38</span></p>
            <p className={styles.p2}><span className={styles.emailkey}>Email:</span> <span className={styles.emailvalue}>retailroom@mail.com</span></p>
        </div>
    );
}

export default Footer;