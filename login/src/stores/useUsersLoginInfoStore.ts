import { create } from "zustand";
import { UserLoginInfo } from "./types";

type UsersLoginInfoState = {
  usersLoginInfo: UserLoginInfo[];
};

export const useUsersLoginInfoStore = create<UsersLoginInfoState>(() => ({
  usersLoginInfo: [
    {
      username: "tiagocarvalho",
      email: "tiago.carvalho@itsector.pt",
      password: "password",
    },
    {
      username: "miguelsantos",
      email: "miguel.santos@itsector.pt",
      password: "password",
    },
  ],
}));
