import React from "react";
import styles from "./Header.module.css";
const Header = ({ changePage }) => {

  const onChangePage = (e) => {
    const page = e.target.name
    console.log(page)
    changePage(page)
  }

  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <button type="button" name="retail" onClick={onChangePage}>
                RETAIL
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="katalog" onClick={onChangePage}>
                КАТАЛОГ
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="korzina" onClick={onChangePage}>
                КОРЗИНА
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="kontakti" onClick={onChangePage}>
                КОНТАКТЫ
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
