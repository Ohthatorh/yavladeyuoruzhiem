import styles from "./card-item.module.scss";
import { FC } from "react";
import Link from "next/link";
import { CardItemImg } from "./card-item-img/card-item-img";
import { CardItemDescription } from "./card-item-description/card-item-description";
import { CardItemButton } from "./card-item-button/card-item-button";
import { CardItemActions } from "./card-item-actions/card-item-actions";
import { CardItemActionFavourite } from "./card-item-actions/card-item-action-favourite/card-item-action-favourite";
import { CardItemLabels } from "./card-item-labels/card-item-labels";
import classNames from "classnames";

interface ICardItem {
  item: any;
  className?: string;
}

export const CardItem: FC<ICardItem> = ({ item, className }) => {
  const cardClassNames = classNames({
    [className!]: className,
    [styles.card]: true,
  });
  const inStock = item.available === true;
  return (
    <div className={cardClassNames}>
      <CardItemLabels labels={item.labels} />
      <CardItemActions
        btn={<CardItemActionFavourite id={item.id} name={item.name} />}
      />
      <Link className={styles.link} href={`/card/${item.id}/`}>
        <CardItemImg srcImg={item.preview_picture} name={item.name} />
        <CardItemDescription
          stock={inStock}
          name={item.name}
          price={item.price}
          salePrice={item.price_discount}
        />
      </Link>
      <CardItemButton id={item.id} stock={inStock} name={item.name} />
    </div>
  );
};
