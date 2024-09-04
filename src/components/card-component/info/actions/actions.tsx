import { Button } from "@/components/button/button";
import styles from "./actions.module.scss";
import { FC, useEffect, useState } from "react";
import { CartIcon, FavouriteIcon } from "@/components/icon";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import {
  addToFavourites,
  getFavourites,
  removeFromFavourites,
} from "@/services/redux/features/favouritesSlice";
import { addToCart, getCart } from "@/services/redux/features/cartSlice";

interface IActions {}

export const Actions: FC<IActions> = ({ id, name, stock }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(getFavourites);
  const [isClient, setIsClient] = useState(false);
  const cart = useAppSelector(getCart);
  const isInCart = cart.some((item) => item.id === id);
  const handleFavouritesClick = () => {
    if (favourites.includes(id)) {
      dispatch(removeFromFavourites({ id, name }));
    } else {
      dispatch(addToFavourites({ id, name }));
    }
  };
  const handleAddToCartClick = () => {
    if (!stock || isInCart) return;
    dispatch(addToCart({ id, name }));
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.buttonWrap}>
      <Button
        id={id}
        text={
          stock
            ? isClient
              ? isInCart
                ? "В корзине"
                : "В корзину"
              : "В корзину"
            : "Нет в наличии"
        }
        extraClass={
          stock
            ? isClient
              ? isInCart
                ? styles.button
                : undefined
              : undefined
            : styles.button
        }
        icon={stock ? <CartIcon /> : null}
        onClick={handleAddToCartClick}
      />
      <button className={styles.favourite} onClick={handleFavouritesClick}>
        <FavouriteIcon fill={favourites.includes(id)} />
      </button>
    </div>
  );
};
