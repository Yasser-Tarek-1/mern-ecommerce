import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./querys/productsApi";
import { cartApi } from "./querys/cartApi";
import { userInfoApi } from "./querys/userInfoApi.js";
import { favoriteApi } from "./querys/favoriteApi";
import { authApi } from "./querys/authApi";
// slice
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(cartApi.middleware)
      .concat(userInfoApi.middleware)
      .concat(favoriteApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);
