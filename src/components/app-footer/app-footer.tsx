import { FC } from "react";
import styles from "./app-footer.module.scss";
import classNames from "classnames";
import Link from "next/link";

export const AppFooter: FC = () => {
  const AppFooterWrap = classNames({
    [styles.footerWrap]: true,
    container: true,
  });
  return (
    <footer className={styles.footer}>
      <div className={AppFooterWrap}>
        <div className={styles.wrap}>
          <p className={styles.title}>© ООО “Куб”, 2024</p>
          <p className={styles.text}>
            ИНН 4401161429
            <br />
            КПП 440101001
            <br />
            ОРГН 1154401003580
            <br />
            р/с 40702810213250000643
            <br />
            Филиал «Центральный» банка ВТБ (ПАО) в г. Москве
            <br />
            к/с 30101810145250000411
            <br />
            БИК 044525411
          </p>
        </div>
        <div className={styles.wrap}>
          <p className={styles.title}>Покупателям</p>
          <Link href={"/catalog/"} className={styles.link}>
            Каталог
          </Link>
          <Link href={"/license/"} className={styles.link}>
            Правила лицензии
          </Link>
          <Link href={"/policy/"} className={styles.link}>
            Политика конфиденциальности
          </Link>
        </div>
        <div className={styles.wrap}>
          <p className={styles.title}>Контакты</p>
          <p className={styles.text}>Ежедневно с 7:00-22:00</p>
          <a href="tel:78007008256" className={styles.link}>
            8 800 700-82-56
          </a>
          <a href="mailto:info@ohotaktiv.ru" className={styles.link}>
            info@ohotaktiv.ru
          </a>
        </div>
      </div>
    </footer>
  );
};
