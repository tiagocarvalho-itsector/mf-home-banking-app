import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type LoggedInContextType = {
  loggedInUser: string;
  setLoggedInUser: (emailOrUsername: string) => void;
};

const LoggedInContext = createContext<LoggedInContextType | null>(null);

export const useLoggedIn = () => {
  const context = useContext(LoggedInContext);
  if (!context) {
    throw new Error("useLoggedIn must be used within a LoggedInProvider");
  }
  return context;
};

interface LoggedInProviderProps {
  children: ReactNode;
}

export const LoggedInProvider: React.FC<LoggedInProviderProps> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<string>(
    localStorage.getItem("loggedInUser") || ""
  );

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", loggedInUser);
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [loggedInUser]);

  return (
    <LoggedInContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInContext.Provider>
  );
};
