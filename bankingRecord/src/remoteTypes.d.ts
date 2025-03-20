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

declare module "container/FallbackRemote" {
  interface ThisProps {
    name: string;
  }

  const FallbackRemote: React.FC<ThisProps>;
  export default FallbackRemote;
}

declare module "personalData/App" {
  const PersonalDataApp: React.ComponentType;
  export default PersonalDataApp;
}
