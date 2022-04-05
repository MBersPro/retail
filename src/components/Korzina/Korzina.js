import React from "react";
import styles from "./Korzina.module.css";
const Korzina = ({ korzina, deleteFromKorzina }) => {
  const onDeleteFromKorzina = (e) => {
    const id = e.target.id;
    deleteFromKorzina(id);
  };
  return (
    <main className={styles.container}>
      <ul className={styles.ul}>
        {korzina.map((product) => (
          <li className={styles.li}>
            <div className={styles.image_container}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className={styles.korzinaCharactersContainer}>
              <div className={styles.p_contrainer}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>{product.price}₽</p>
                <p className={styles.season}>
                  <span className={styles.season_span}>Сезон:</span>
                  {product.seasons.map((season) => (
                    <span className={styles.season_span}>{season}</span>
                  ))}
                </p>
                <p>Артикул: {product.id}</p>
              </div>

              <button
                className={styles.btnDel}
                type="button"
                id={product.id}
                onClick={onDeleteFromKorzina}
              >
                Удалить из корзины
              </button>
            </div>
          </li>
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
