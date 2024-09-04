import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "react-toastify";

interface IInitialState {
  cart: { id: string; quantity: number }[];
  order: {
    orderId: string;
    sum: number;
    pending: boolean;
  };
}

const initialState: IInitialState = {
  cart: [],
  order: {
    orderId: "",
    sum: 0,
    pending: false,
  },
};

export const createOrder: any = createAsyncThunk(
  "cart/createOrder",
  async ({ data }, { rejectWithValue }) => {
    try {
      // return createOrderRequest(data).then((res) => res);
    } catch (err) {
      return rejectWithValue("error");
    }
  }
);

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: any,
      action: { payload: { id: string; name: string } }
    ) => {
      state.cart = [
        ...state.cart,
        {
          id: action.payload.id,
          quantity: 1,
        },
      ];
      toast.success(action.payload.name + " добавлен в корзину!");
    },
    changeQuantity: (
      state: any,
      action: { payload: { id: string; action: string } }
    ) => {
      if (action.payload.action === "append") {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else if (action.payload.action === "subtract") {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    removeFromCart: (
      state: any,
      action: { payload: { id: string; name: string } }
    ) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      toast.success(action.payload.name + " удален из корзины!");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state, action) => {
      state.order.pending = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.order.pending = false;
      // state.order.orderId = action.payload.orderId;
      // state.order.sum = action.payload.sum;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.order.pending = false;
      toast.error(action.error.message);
    });
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cart.actions;

export const getCart = (state: RootState) => state.cart.cart;

export default cart.reducer;
