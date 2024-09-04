import { FC } from "react";
import styles from "./card-item-description.module.scss";
import { priceWithSpaces } from "@/utils/func/price-with-spaces";

interface ICardItemDescription {
  name: string;
  stock: boolean;
  price: string;
  salePrice: string;
}

export const CardItemDescription: FC<ICardItemDescription> = ({
  name,
  stock,
  price,
  salePrice,
}) => {
  const stockText = stock ? "В наличии" : "Нет в наличии";
  return (
    <div className={styles.descriptionWrap}>
      <div className={styles.priceWrap}>
        <p className={styles.priceNow}>{priceWithSpaces(salePrice || price)}</p>
        {salePrice && salePrice < price && (
          <p className={styles.priceFrom}>{priceWithSpaces(price)}</p>
        )}
      </div>
      <div className={styles.nameWrap}>
        <p className={styles.nameText}>{name}</p>
      </div>
      <div className={styles.stockWrap}>
        <div className={stock ? styles.labelStock : styles.labelNoStock} />
        <p className={styles.stockText}>{stockText}</p>
      </div>
    </div>
  );
};
