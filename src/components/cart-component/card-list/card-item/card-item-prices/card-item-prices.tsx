import { priceWithSpaces } from "@/utils/func/price-with-spaces";
import styles from "./card-item-prices.module.scss";
import { FC } from "react";

interface ICardItemPrices {
  price: number;
  salePrice: number;
}

export const CardItemPrices: FC<ICardItemPrices> = ({ price, salePrice }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.price}>{priceWithSpaces(salePrice || price)}</p>
      {salePrice && salePrice < price ? (
        <p className={styles.oldPrice}>{priceWithSpaces(price)}</p>
      ) : null}
    </div>
  );
};
