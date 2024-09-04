import { FavouriteIcon } from "@/components/icon";
import {
  addToFavourites,
  getFavourites,
  removeFromFavourites,
} from "@/services/redux/features/favouritesSlice";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import { FC } from "react";

interface ICardItemActionFavourite {
  id: string;
  name: string;
}

export const CardItemActionFavourite: FC<ICardItemActionFavourite> = ({
  id,
  name,
}) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(getFavourites);
  const handleFavouritesClick = () => {
    if (favourites.includes(id)) {
      dispatch(removeFromFavourites({ id, name }));
    } else {
      dispatch(addToFavourites({ id, name }));
    }
  };
  return (
    <button onClick={handleFavouritesClick}>
      <FavouriteIcon fill={favourites.includes(id)} />
    </button>
  );
};
