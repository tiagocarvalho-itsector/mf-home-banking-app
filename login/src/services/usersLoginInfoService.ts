import { UserLoginInfo } from "../stores/types";
import { useUsersLoginInfoStore } from "../stores/useUsersLoginInfoStore";

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
