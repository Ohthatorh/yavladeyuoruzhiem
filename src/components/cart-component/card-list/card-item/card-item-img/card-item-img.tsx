import Image from "next/image";
import styles from "./card-item-img.module.scss";
import { FC } from "react";

interface ICardItemImg {
  imgUrl?: string;
  name: string;
}

export const CardItemImg: FC<ICardItemImg> = ({ imgUrl, name }) => {
  return (
    <div className={styles.wrap}>
      <Image
        src={
          imgUrl ||
          "http://147.45.153.80/wp-content/uploads/2024/08/no_photo.png"
        }
        alt={name}
        className={styles.img}
        width={211}
        height={211}
      />
    </div>
  );
};
