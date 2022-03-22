import React from 'react'
import styles from "./Instructions.module.css"
import bag from "./bag.png"
import card from "./card.png"
import car from "./car.png"
const Instructions = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <img className={styles.img} src={bag} alt="икнонки"/>
                        <p className={styles.p}>Выбираем модель.<br/>Подбираем размер.</p>                                 
                    </li>
                    <li className={styles.li}>
                        <img className={styles.img} src={car} alt="икнонки"/>
                        <p className={styles.p}>Осуществляем курьерскую<br/>доставку.<br/>Доставляем по всей России.</p>
                    </li>
                    <li className={styles.li}>
                        <img className={styles.img} src={card} alt="икнонки"/>
                        <p className={styles.p}>Вы оплачиваете товар.<br/>Обмен производится в течение<br/>14 дней</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Instructions;