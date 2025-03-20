import { create } from "zustand";
import { UserLoginInfo } from "./types";

interface UsersLoginInfoState {
  usersLoginInfo: UserLoginInfo[];
  addUser: (user: UserLoginInfo) => void;
  removeUser: (email: string) => void;
}

export const useUsersLoginInfoStore = create<UsersLoginInfoState>((set) => ({
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

  addUser: (user) =>
    set((state) => ({
      usersLoginInfo: [...state.usersLoginInfo, user],
    })),

  removeUser: (email) =>
    set((state) => ({
      usersLoginInfo: state.usersLoginInfo.filter((u) => u.email !== email),
    })),
}));
