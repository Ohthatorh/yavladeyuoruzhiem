import styles from "./description.module.scss";
import { FC } from "react";

interface IDescription {}

export const Description: FC<IDescription> = ({ text }) => {
  return (
    text && (
      <div className={styles.wrap}>
        <h2 className={styles.title}>О товаре</h2>
        <p className={styles.text}>{text.replace(/<(.|\n)*?>/g, "")}</p>
      </div>
    )
  );
};
