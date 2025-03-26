import React, { createContext, useState, useContext, ReactNode } from "react";

interface PersonalDataContextType {
  isPersonalDataVisible: boolean;
  togglePersonalDataVisibility: () => void;
}

const PersonalDataContext = createContext<PersonalDataContextType | undefined>(
  undefined
);

export const PersonalDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isPersonalDataVisible, setPersonalDataVisible] = useState(false);

  const togglePersonalDataVisibility = () => {
    setPersonalDataVisible((prev) => !prev);
  };

  return (
    <PersonalDataContext.Provider
      value={{ isPersonalDataVisible, togglePersonalDataVisibility }}
    >
      {children}
    </PersonalDataContext.Provider>
  );
};

export const usePersonalData = (): PersonalDataContextType => {
  const context = useContext(PersonalDataContext);
  if (!context) {
    throw new Error(
      "usePersonalData must be used within a PersonalDataProvider"
    );
  }
  return context;
};
