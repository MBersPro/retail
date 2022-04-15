import React from "react";
import styles from "./Korzina.module.css";
import KorzinaProduct from "./KorzinaProduct/KorzinaProduct";
const Korzina = ({ korzina, deleteFromKorzina }) => {

  return (
    <main className={styles.container}>
      <ul className={styles.ul}>
        {korzina.map((product) => (
          <KorzinaProduct
            product={product}
            deleteFromKorzina={deleteFromKorzina}
          />
        ))}
      </ul>
      <div>
        <p className={styles.pInstruction}>
          Для того, чтобы осуществить заказ,
          <br />
          свяжитесь с наши менеджером люб
          <br />
          ым удобным для вас способом и <br />
          назовите ему артукул тех товаров,
          <br />
          которые хотите приобрести.
          <br />
        </p>
        <div className={styles.divA}>
          <a
            href="tg://resolve?domain=retail_manager"
            className={styles.aTelegram}
          >
            Telegram
          </a>
          <a href="https://wa.me/79688588238" className={styles.aWhatsApp}>
            WhatsApp
          </a>
          <a href="tel:+79688588238" className={styles.aNumber}>
            +79688588238
          </a>
        </div>
      </div>
    </main>
  );
};

export default Korzina;
