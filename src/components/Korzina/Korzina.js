import React, {useState} from "react";
import styles from "./Korzina.module.css";

const Korzina = ({ korzina, deleteFromKorzina }) => {
  const onDeleteFromKorzina = (e) => {
    const id = e.target.id;
    deleteFromKorzina(id);
  };
  return (
    <main>
      <div>
        Для того, чтобы осуществить заказ, свяжитесь с наши менеджером любым
        удобным для вас способом и назовите ему артукул тех товаров, которые
        хотите приобрести.
      </div>
      <a href="tg://resolve?domain=buyer_3198">Telegram</a>
      <a href="https://wa.me/79688588238">WhatsApp</a>
      <a href="tel:+79688588238">+79688588238</a>
      <ul>
        {korzina.map((product) => (
          <li>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />
            <p>{product.name}</p>
            <button type="button" id={product.id} onClick={onDeleteFromKorzina}>
              Удалить из корзины
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Korzina;
