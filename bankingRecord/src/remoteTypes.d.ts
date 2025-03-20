declare module "container/LoggedInContext" {
  interface LoggedInContextType {
    loggedInEmail: string | null;
    setLoggedInEmail: (email: string | null) => void;
  }

  export function useLoggedIn(): LoggedInContextType;

  interface LoggedInProviderProps {
    children: React.ReactNode;
  }

  export const LoggedInProvider: React.FC<LoggedInProviderProps>;
}
