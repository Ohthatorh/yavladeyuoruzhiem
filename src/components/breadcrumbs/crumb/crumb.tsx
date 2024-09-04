import styles from "./crumb.module.scss";
import { FC } from "react";
import Link from "next/link";

export const Crumb: FC<any> = ({ text, link, isLast, index }) => {
  return (
    <li
      className={styles.crumb}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      {isLast ? (
        <p itemProp="item" className={styles.text}>
          {text}
        </p>
      ) : (
        <Link itemProp="item" href={link} className={styles.link}>
          {text}
        </Link>
      )}
      <meta itemProp="position" content={index} />
    </li>
  );
};
