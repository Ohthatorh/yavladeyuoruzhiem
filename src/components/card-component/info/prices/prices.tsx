import { priceWithSpaces } from "@/utils/func/price-with-spaces";
import styles from "./prices.module.scss";
import { FC } from "react";

interface IPrices {}

export const Prices: FC<IPrices> = ({ salePrice, price }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.pricesWrap}>
        {salePrice && salePrice < price && (
          <p className={styles.oldPrice}>{priceWithSpaces(price)}</p>
        )}
        <p className={styles.price}>{priceWithSpaces(salePrice || price)}</p>
      </div>
      {salePrice && salePrice < price && (
        <p className={styles.discountPrice}>
          {priceWithSpaces(salePrice - price)}
        </p>
      )}
    </div>
  );
};
