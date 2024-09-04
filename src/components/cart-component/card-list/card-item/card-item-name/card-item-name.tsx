import styles from "./card-item-name.module.scss";
import { FC } from "react";

interface ICardItemName {
  name: string;
}

export const CardItemName: FC<ICardItemName> = ({ name }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>{name}</p>
    </div>
  );
};
