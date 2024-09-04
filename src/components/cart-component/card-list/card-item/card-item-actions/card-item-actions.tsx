import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import styles from "./card-item-actions.module.scss";
import { FC } from "react";
import { removeFromCart } from "@/services/redux/features/cartSlice";
import {
  addToFavourites,
  getFavourites,
  removeFromFavourites,
} from "@/services/redux/features/favouritesSlice";

interface ICardItemActions {
  id: string;
  name: string;
}

export const CardItemActions: FC<ICardItemActions> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(getFavourites);
  const handleDelete = () => {
    dispatch(removeFromCart({ id, name }));
  };
  const handleFavouritesClick = () => {
    if (favourites.includes(id)) {
      dispatch(removeFromFavourites({ id, name }));
    } else {
      dispatch(addToFavourites({ id, name }));
    }
  };
  return (
    <div className={styles.wrap}>
      <button className={styles.button} onClick={handleDelete}>
        Удалить
      </button>
      <button className={styles.button} onClick={handleFavouritesClick}>
        {favourites.includes(id) ? "Удалить из избранного" : "В избранное"}
      </button>
    </div>
  );
};
