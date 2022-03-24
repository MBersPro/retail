import React from "react";
import styles from "./Korzina.module.css";

const Korzina = ({ korzina }) => {
  return (
    <div>
      <main>
        <ul>
          {korzina.map((product) => (
            <li>
              <img
                className={styles.image}
                src={product.image}
                alt={product.name}
              />
              <p>{product.name}</p>
            </li>
          ))}
        </ul>
        <div>
          Для того, чтобы осуществить заказ, свяжитесь с наши менеджером любым
          удобным для вас способом и назовите ему артукул тех товаров, которые
          хотите приобрести.
        </div>
      </main>
    </div>
  );
};

export default Korzina;
