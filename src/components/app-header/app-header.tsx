import { FC } from "react";
import styles from "./app-header.module.scss";
import { HeaderGeo } from "./header-geo/header-geo";
import { HeaderInfo } from "./header-info/header-info";
import { HeaderActions } from "./header-actions/header-actions";
import { HeaderCatalog } from "./header-catalog/header-catalog";
import { getCategories } from "@/utils/api/catalog";

export const AppHeader: FC = async () => {
  const categories = await getCategories();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <div className={styles.wrap}>
            <HeaderGeo />
            <HeaderInfo />
          </div>
          <div className={styles.wrap}>
            <HeaderCatalog categories={categories} />
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
};
