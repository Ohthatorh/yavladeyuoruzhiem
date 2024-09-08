import { FavouriteIcon } from "@/components/icon";
import { FavouriteFilledIcon } from "@/components/icon/favourite-icon/favourite-icon";
import {
  addToFavourites,
  getFavourites,
  removeFromFavourites,
} from "@/services/redux/features/favouritesSlice";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import { FC, use, useEffect, useState } from "react";

interface ICardItemActionFavourite {
  id: string;
  name: string;
}

export const CardItemActionFavourite: FC<ICardItemActionFavourite> = ({
  id,
  name,
}) => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(getFavourites);
  const handleFavouritesClick = () => {
    if (favourites.includes(id)) {
      dispatch(removeFromFavourites({ id, name }));
    } else {
      dispatch(addToFavourites({ id, name }));
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <button onClick={handleFavouritesClick}>
      {favourites.includes(id) && isClient ? (
        <FavouriteFilledIcon />
      ) : (
        <FavouriteIcon />
      )}
    </button>
  );
};
