import { useAppSelector } from "@/services/redux/hooks";
import { CardItemActions } from "./card-item-actions/card-item-actions";
import { CardItemCounter } from "./card-item-counter/card-item-counter";
import { CardItemImg } from "./card-item-img/card-item-img";
import { CardItemName } from "./card-item-name/card-item-name";
import { CardItemPrices } from "./card-item-prices/card-item-prices";
import styles from "./card-item.module.scss";
import { FC } from "react";
import { getCart } from "@/services/redux/features/cartSlice";
import classNames from "classnames";

interface ICardItem {}

export const CardItem: FC<ICardItem> = ({ item }) => {
  const quantity = useAppSelector(getCart).find(
    (el) => el.id === item.id
  )?.quantity;
  const maxCount =
    item.store?.map((store) => store.amount).reduce((a, b) => a + b, 0) +
    Number(item.quantity);
  const classNameWrap = classNames({
    [styles.wrap]: true,
    [styles.outOfStock]: maxCount <= 0,
  });
  return (
    <div className={classNameWrap}>
      <CardItemImg
        imgUrl={`https://ohotaktiv.ru${item.preview_picture}`}
        name={item.name}
      />
      <CardItemName name={item.name} />
      <CardItemActions id={item.id} name={item.name} />
      <CardItemPrices
        price={Number(item.price) * Number(quantity)}
        salePrice={Number(item.price_discount) * Number(quantity)}
      />
      <CardItemCounter
        id={item.id}
        quantity={quantity}
        maxCount={maxCount}
        stock={maxCount > 0}
      />
    </div>
  );
};
