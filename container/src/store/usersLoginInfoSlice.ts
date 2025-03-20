import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserLoginInfo {
  username: string;
  email: string;
  password: string;
}

interface UsersLoginInfoState {
  usersLoginInfo: UserLoginInfo[];
}

const initialState: UsersLoginInfoState = {
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
};

const usersLoginInfoSlice = createSlice({
  name: "usersLoginInfo",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserLoginInfo>) {
      state.usersLoginInfo.push(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      state.usersLoginInfo = state.usersLoginInfo.filter(
        (user) => user.email !== action.payload
      );
    },
  },
});

export const { addUser, removeUser } = usersLoginInfoSlice.actions;
export default usersLoginInfoSlice.reducer;
