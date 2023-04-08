import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./rtk-query/productsApi";
import { cartApi } from "./rtk-query/cartApi";
import { userInfoApi } from "./rtk-query/userInfoApi.js";
import { favoriteApi } from "./rtk-query/favoriteApi";
// slice
import userLogin from "./slices/userLoginSlice";
import userRegister from "./slices/userRegisterSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    login: userLogin,
    register: userRegister,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(cartApi.middleware)
      .concat(userInfoApi.middleware)
      .concat(favoriteApi.middleware),
});

setupListeners(store.dispatch);
