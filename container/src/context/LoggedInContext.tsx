import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type LoggedInContextType = {
  loggedInEmail: string | null;
  setLoggedInEmail: (email: string | null) => void;
};

const LoggedInContext = createContext<LoggedInContextType | null>({
  loggedInEmail: "email@exemplo.com",
  setLoggedInEmail: () => {},
});

export const useLoggedIn = () => {
  const context = useContext(LoggedInContext);
  if (context === null) {
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
  const storedEmail = localStorage.getItem("loggedInUser");

  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(
    storedEmail
  );

  useEffect(() => {
    if (loggedInEmail) {
      localStorage.setItem("loggedInUser", loggedInEmail);
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [loggedInEmail]);

  const handleLoginLogout = useCallback((email: string | null) => {
    setLoggedInEmail(email);
  }, []);

  return (
    <LoggedInContext.Provider
      value={{
        loggedInEmail,
        setLoggedInEmail: handleLoginLogout,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};
