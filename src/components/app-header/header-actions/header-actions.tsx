import Link from "next/link";
import styles from "./header-actions.module.scss";
import { FC } from "react";
import { CartIcon, FavouriteIcon } from "@/components/icon";

export const HeaderActions: FC = () => {
  return (
    <div className={styles.wrap}>
      <Link href={"/favourites/"} className={styles.link}>
        <FavouriteIcon />
        Избранное
      </Link>
      <Link href={"/cart/"} className={styles.link}>
        <CartIcon />
        Корзина
      </Link>
    </div>
  );
};
