import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type dishItem = {
  id: number;
  amount: number;
  attributes: { name: string; desc: string; price: number; imgUrl: string };
};

export interface CounterState {
  items: { [id: number]: dishItem };
}

const initialState: CounterState = {
  items: {},
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //click plus button
    addToBasket: (state, action: PayloadAction<dishItem>) => {
      // console.log(state.items);
      state.items[`${action.payload.id}`] = action.payload;
    },
    //click minus button
    removeFromBasket: (state, action: PayloadAction<number>) => {
      // console.log(action.payload); // id
      if (state.items[`${action.payload}`].amount - 1 <= 0) {
        delete state.items[`${action.payload}`];
      } else {
        state.items[`${action.payload}`].amount -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const getBasket = (state: RootState) => {
  return state.basket.items;
};
export const getOneBasketItem = (state: RootState, id: number) => {
  return state.basket.items[id];
};

export const getTotalBasketItem = (state: RootState) => {
  return Object.values(state.basket.items).reduce(
    (total, current) => total + current.amount,
    0
  );
};
export const getTotalPrice = (state: RootState) => {
  return Object.values(state.basket.items).reduce(
    (total, current) =>
      Math.round((total + current.amount * current.attributes.price) * 100) /
      100,
    0
  );
};

export default basketSlice.reducer;
