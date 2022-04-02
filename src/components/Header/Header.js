import React from "react";
import styles from "./Header.module.css";
const Header = ({ changePage }) => {

  const onChangePage = (e) => {
    const page = e.target.name
    changePage(page)
  }

  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <button type="button" name="retail" onClick={onChangePage} className={styles.buttonnav}>
                RETAIL
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="katalog" onClick={onChangePage} className={styles.buttonnav}>
                КАТАЛОГ
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="korzina" onClick={onChangePage} className={styles.buttonnav}>
                КОРЗИНА
              </button>
            </li>
            <li className={styles.li}>
              <button type="button" name="kontakti" onClick={onChangePage} className={styles.buttonnav}>
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
