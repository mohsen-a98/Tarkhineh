import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authentication/authSlice";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
