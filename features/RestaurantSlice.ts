import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type dish = {
  id: number;
  attributes: {
    name: string;
    short_description: string;
    price: number;
  };
};

type ResCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: dish[];
  long: number;
  lat: number;
};
// Define a type for the slice state
interface RestaurantState {
  currentRestaurant: ResCardProps;
}

// Define the initial state using that type
const initialState: RestaurantState = {
  currentRestaurant: {
    id: 0,
    imgUrl: "string",
    title: "string",
    rating: 0,
    genre: "string",
    address: "string",
    short_description: "string",
    dishes: [],
    long: 0,
    lat: 0,
  },
};

export const RestaurantSlice = createSlice({
  name: "Restaurant",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<ResCardProps>) => {
      state.currentRestaurant = action.payload;
    },
  },
});

export const { setRestaurant } = RestaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCurrentRestaurant = (state: RootState) =>
  state.restarant.currentRestaurant;

export default RestaurantSlice.reducer;
