declare module "firstChild/App" {
  const FirstChildApp: React.ComponentType;
  export default FirstChildApp;
}

declare module "secondChild/App" {
  const SecondChildApp: React.ComponentType;
  export default SecondChildApp;
}

declare module "container/LoggedInContext" {
  interface LoggedInContextType {
    loggedIn: boolean;
    toggleLoggedIn: () => void;
  }

  export function useLoggedIn(): LoggedInContextType;

  interface LoggedInProviderProps {
    children: React.ReactNode;
  }

  export const LoggedInProvider: React.FC<LoggedInProviderProps>;
}
