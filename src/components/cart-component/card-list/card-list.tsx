import { CardItem } from "./card-item/card-item";
import styles from "./card-list.module.scss";
import { FC } from "react";

interface ICardList {}

export const CardList: FC<ICardList> = ({ cart, cartList }) => {
  return (
    <div className={styles.wrap}>
      {cart.map((item) => {
        const cartItem = cartList.find((el) => el.id === item.id);
        return <CardItem key={item.id} item={cartItem} />;
      })}
    </div>
  );
};
