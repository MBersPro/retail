import React, {useState} from "react";
import styles from "./Korzina.module.css";
import { ReactComponent as Phone } from "./svg/Phone.svg";
import { ReactComponent as WhatsApp } from "./svg/WhatsApp.svg";
import { ReactComponent as Telegram } from "./svg/Telegram.svg";
// import { ReactComponent as LinkedIn } from "./svg/LinkedIn.svg";

const Korzina = ({ korzina, deleteFromKorzina }) => {
  const onDeleteFromKorzina = (e) => {
    const id = e.target.id;
    deleteFromKorzina(id);
  };
  return (
    <main>
      <div className={styles.container}>
        <p className={styles.pInstruction}>
            Для того, чтобы осуществить заказ,<br/>
            свяжитесь с наши менеджером люб<br/>
            ым удобным для вас способом и <br/>
            назовите ему артукул тех товаров,<br/>
            которые хотите приобрести.<br/>
          </p>
        <div className={styles.divA}>
        <a href="tg://resolve?domain=buyer_3198" className={styles.aTelegram}><Telegram className={styles.telegramIcon}/>Telegram</a>
          <a href="https://wa.me/79688588238" className={styles.aWhatsApp}><WhatsApp className={styles.whatsAppIcon}/>WhatsApp</a>
          <a href="tel:+79688588238" className={styles.aNumber}><Phone className={styles.numberIcon}/>+79688588238</a>
        </div>
      
          <ul className={styles.ul}>
            {korzina.map((product) => (
              <li className={styles.li}>
                <div className={styles.divProduct}>
                    <img
                      className={styles.image}
                      src={product.image}
                      alt={product.name}
                    />
                    <p className={styles.productName}>{product.name}</p>
                  
                    <button className={styles.btnDel} type="button" id={product.id} onClick={onDeleteFromKorzina}>
                      Удалить из корзины
                    </button>
                  </div>
              </li>
            ))}
          </ul>
      </div>
    </main>
  );
};

export default Korzina;
