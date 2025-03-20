declare module "bankingRecord/App" {
  const BankingRecordApp: React.ComponentType;
  export default BankingRecordApp;
}

declare module "container/LoggedInContext" {
  interface LoggedInContextType {
    loggedInUser: string;
    setLoggedInUser: (username: string) => void;
  }

  export function useLoggedIn(): LoggedInContextType;

  interface LoggedInProviderProps {
    children: React.ReactNode;
  }

  export const LoggedInProvider: React.FC<LoggedInProviderProps>;
}
