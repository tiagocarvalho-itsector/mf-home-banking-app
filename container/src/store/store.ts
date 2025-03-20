import { configureStore } from "@reduxjs/toolkit";
import usersLoginInfoReducer from "./usersLoginInfoSlice";

export const store = configureStore({
  reducer: {
    usersLoginInfo: usersLoginInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
