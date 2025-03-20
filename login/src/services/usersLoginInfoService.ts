import { UserLoginInfo } from "../stores/types";
import { useUsersLoginInfoStore } from "../stores/useUsersLoginInfoStore";

export function addUserLoginInfo(user: UserLoginInfo): void {
  const addUser = useUsersLoginInfoStore.getState().addUser;
  addUser(user);
}

export function removeUserLoginInfo(email: string): void {
  const removeUser = useUsersLoginInfoStore.getState().removeUser;
  removeUser(email);
}

export function emailOrUsernameAndPasswordMatch(
  emailOrUsername: string,
  password: string
): UserLoginInfo | undefined {
  const users = useUsersLoginInfoStore.getState().usersLoginInfo;

  const userFound = users.find(
    (user) =>
      (user.email.trim().toLowerCase() ===
        emailOrUsername.trim().toLowerCase() ||
        user.username.trim().toLowerCase() ===
          emailOrUsername.trim().toLowerCase()) &&
      user.password === password
  );

  return userFound;
}
