import axios from "axios";
import React, { useState } from "react";
import styles from "./Korzina.module.css";
import KorzinaProduct from "./KorzinaProduct/KorzinaProduct";

const TOKEN = "5369341915:AAF5FChqpjA1XfbPbi1mWuxCC2zIxTGELDs";
const CHAT_ID = "-1001766390152";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const initialState = {
  name: "",
  comWay: "",
  number: ""
}

const Korzina = ({ korzina, deleteFromKorzina }) => {
  const [formState, setFormState] = useState({ ...initialState });

  // if(tgBtn){
  //  tgBtn.addEventListener("submit" , function(e){
  //   e.preventDefault()

  //   let message = `<b>Заявка от:</b>${this.name.value}\n`
  //   message += `<b>Номер:</b>${this.number.value}`
  //   axios.post(URI_API, {
  //     chat_id: CHAT_ID,
  //     parse_mode: 'html',
  //     text: message
  //    })
  //  })

  // }

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  const sendMessage = (e) => {
    e.preventDefault();
    let message = `Заявка от: ${formState.name}\nПредпочтительный способ связи: ${formState.comWay}\nНомер телефона: ${formState.number}\nЗаказал:\n${korzina.map((product, index) => `${index + 1}. ${product.name} Цвет:${product.color} Цена:${product.price}\n`)}`;
    console.log(message);
    setFormState({ ...initialState });
  };

  return (
    <main className={styles.container}>
      <ul className={styles.ul}>
        {korzina.map((product) => (
          <li key={`${product.id}${product.color}`} className={styles.li}>
            <KorzinaProduct
              product={product}
              deleteFromKorzina={deleteFromKorzina}
            />
          </li>
        ))}
      </ul>
      <div>
        <p className={styles.pInstruction}>
          Для того, чтобы осуществить заказ,
          <br />
          свяжитесь с наши менеджером любым
          <br />
          удобным для вас способом и <br />
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
        <form id="tgBtn" onSubmit={sendMessage}>
          <input
            value={formState.name}
            onChange={onHandleChange}
            name="name"
            type="text"
          />
          <input
            value={formState.number}
            onChange={onHandleChange}
            name="number"
            type="text"
          />
          <button className="korzina_orderingBtn" type="submit">
            Оформить заказ
          </button>
        </form>
      </div>
    </main>
  );
};

export default Korzina;
