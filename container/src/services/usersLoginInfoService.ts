import { store } from "../store/store";
import { UserLoginInfo } from "../store/types";
import { addUser, removeUser } from "../store/usersLoginInfoSlice";

export function addUserLoginInfo(user: UserLoginInfo): void {
  store.dispatch(addUser(user));
}

export function removeUserLoginInfo(email: string): void {
  store.dispatch(removeUser(email));
}

export function loginUser(emailOrUsername: string, password: string): boolean {
  const users = store.getState().usersLoginInfo.usersLoginInfo;

  const userFound = users.some(
    (user) =>
      (user.email.trim().toLowerCase() ===
        emailOrUsername.trim().toLowerCase() ||
        user.username.trim().toLowerCase() ===
          emailOrUsername.trim().toLowerCase()) &&
      user.password === password
  );

  return userFound;
}
