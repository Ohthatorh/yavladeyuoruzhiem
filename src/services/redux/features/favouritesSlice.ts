import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "react-toastify";

interface IInitialState {
  favourites: string[];
}

const initialState: IInitialState = {
  favourites: [],
};

export const favourites = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (
      state: any,
      action: { payload: { id: string; name: string } }
    ) => {
      state.favourites = [...state.favourites, action.payload.id];
      toast.success(action.payload.name + " добавлен в избранное!");
    },
    removeFromFavourites: (
      state: any,
      action: { payload: { id: string; name: string } }
    ) => {
      state.favourites = state.favourites.filter(
        (item) => item !== action.payload.id
      );
      toast.success(action.payload.name + " удален из избранного!");
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favourites.actions;
export const getFavourites = (state: RootState) => state.favourites.favourites;

export default favourites.reducer;
