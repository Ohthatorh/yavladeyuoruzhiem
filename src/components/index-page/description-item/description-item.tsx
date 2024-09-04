import { FC } from "react";
import styles from "./description-item.module.scss";
import Image from "next/image";

const DescriptionItem: FC<any> = ({ srcImg, name }) => {
  return (
    <li className={styles.item}>
      <Image src={srcImg} alt={name} className={styles.img} />
      <p className={styles.text}>{name}</p>
    </li>
  );
};

export default DescriptionItem;
