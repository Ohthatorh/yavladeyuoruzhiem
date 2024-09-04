import { FC } from "react";
import styles from "./available.module.scss";

export const Available: FC = ({ stock }) => {
  const stockText = stock ? "В наличии" : "Нет в наличии";
  return (
    <>
      <div className={styles.availableWrap}>
        <p className={stock ? styles.available : styles.notAvailable}>
          {stockText}
        </p>
      </div>
    </>
  );
};
