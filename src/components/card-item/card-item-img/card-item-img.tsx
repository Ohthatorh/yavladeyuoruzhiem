import styles from "./card-item-img.module.scss";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { CardItemActions } from "../card-item-actions/card-item-actions";
import { CardItemActionFavourite } from "../card-item-actions/card-item-action-favourite/card-item-action-favourite";

interface ICardItemImg {
  srcImg: StaticImageData;
  name: string;
}

export const CardItemImg: FC<ICardItemImg> = ({ srcImg, name }) => {
  return (
    <div className={styles.imgWrap}>
      <Image
        src={`https://ohotaktiv.ru${srcImg}`}
        alt={name}
        className={styles.img}
        width={187}
        height={187}
      />
    </div>
  );
};
