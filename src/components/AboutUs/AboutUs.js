import React from 'react'
import backgroundAboutUs from './backgroundAboutUs.png'
import styles from "./AboutUs.module.css"
const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <img src={backgroundAboutUs} alt="image" className={styles.backgroundAboutUs}/>
                <p className={styles.p}> На нашем сайте Вы найдете для себя интересный ассортимент качественной брендовой одежды.
                    Предлагаем вам посмотреть коллекцию пуховиков лучших мировых производителе.
                
                </p>
                <p className={styles.p2}>Оплата заказа после примерки.</p>
            </div>

        </div>
    );
}

export default AboutUs;