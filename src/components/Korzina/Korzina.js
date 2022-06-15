import axios from "axios";
import React from "react";
import styles from "./Korzina.module.css";
import KorzinaProduct from "./KorzinaProduct/KorzinaProduct";
const Korzina = ({ korzina, deleteFromKorzina }) => {
  const TOKEN = "5369341915:AAF5FChqpjA1XfbPbi1mWuxCC2zIxTGELDs";
  const CHAT_ID = "-1001766390152";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const tgBtn = document.getElementById("tgBtn")
  if(tgBtn){
   tgBtn.addEventListener("submit" , function(e){
    e.preventDefault()
    
    let message = `<b>Заявка от:</b>${this.name.value}\n`
    message += `<b>Номер:</b>${this.number.value}`
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
     })
   })
   
  }
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
        <form id="tgBtn">
          <input name="name" type="text"/>
          <input name="number" type="text"/>
          <button className="korzina_orderingBtn" type="submit">Оформить заказ</button>
        </form>
      </div>
    </main>
  );
};

export default Korzina;
