import styles from "./catalog-item.module.scss";
import { v4 as uuidv4 } from "uuid";
import { FC } from "react";
import Link from "next/link";

export const CatalogItem: FC<any> = ({ item, onClose }) => {
  return (
    <div className={styles.item}>
      <div key={uuidv4()} className={styles.listItem}>
        <Link
          className={styles.listLink}
          href={`/catalog/${item.code}/`}
          onClick={onClose}
        >
          {item.name}
        </Link>
      </div>
    </div>
  );
};
