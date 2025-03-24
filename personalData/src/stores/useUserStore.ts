import { create } from "zustand";
import { User } from "./types";

type UserState = {
  users: User[];
  findUser(username: string): User;
};

export const useUserStore = create<UserState>(() => ({
  users: [
    {
      id: 1,
      username: "tiagocarvalho",
      fullName: "Tiago Carvalho",
      email: "tiago.carvalho@itsector.pt",
      image: "https://i.ibb.co/ZRt3D7vJ/Foto-Tiago-Magalh-es-Carvalho-2.jpg",
    },
    {
      id: 2,
      username: "miguelsantos",
      fullName: "Miguel Santos",
      email: "miguel.santos@itsector.pt",
      image: "https://i.ibb.co/ZRt3D7vJ/Foto-Tiago-Magalh-es-Carvalho-2.jpg",
    },
  ],
  findUser(username): User {
    const user = useUserStore
      .getState()
      .users.find((user) => user.username === username);
    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }
    return user;
  },
}));
