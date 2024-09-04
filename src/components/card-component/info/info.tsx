import { FC } from "react";
import styles from "./info.module.scss";
import { Available } from "./available/available";
import { Prices } from "./prices/prices";
import { Actions } from "./actions/actions";

export const Info: FC = ({ card }) => {
  const inStock = card.available > 0;
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{card.name}</h1>
      <p className={styles.code}>Код товара {card.code}</p>
      <Available stock={inStock} />
      <Prices price={card.price} salePrice={card.price_discount} />
      <Actions id={card.id} name={card.name} stock={inStock} />
    </div>
  );
};
