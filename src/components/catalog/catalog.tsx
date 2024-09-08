import classNames from "classnames";
import { CatalogItem } from "./catalog-item/catalog-item";
import styles from "./catalog.module.scss";
import { v4 as uuidv4 } from "uuid";
import { FC } from "react";

export const Catalog: FC<any> = ({ isOpen, categories, onClose }) => {
  const wrapClassnames = classNames({
    [styles.wrap]: true,
    [styles.wrapActive]: isOpen,
    container: true,
  });
  return (
    <div className={wrapClassnames}>
      {categories.items.map(
        (el: any) =>
          el.code !== "comission" && (
            <CatalogItem key={uuidv4()} item={el} onClose={onClose} />
          )
      )}
    </div>
  );
};
