import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    toggleFavorites: (state, action) => {
      if (state.favorites.find((item) => item.id === action.payload.id)) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },

    // addAddress: (state, action) => {
    //   state.address.push(action.payload);
    // },

    // removeAddress: (state, action) => {
    //   state.address = state.address.filter((item) => item !== action.payload);
    // },

    // addOrder: (state, action) => {
    //   state.orders.push(action.payload);
    // },
  },
});

export const { setUser, toggleFavorites } = userSlice.actions;
export default userSlice.reducer;
