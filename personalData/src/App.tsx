import React from "react";
import "../../global.css";
import { PersonalData } from "./components/personalData";

type PersonalDataAppProps = {
  username: string;
  closePersonalData: () => void;
};

const App: React.FC<PersonalDataAppProps> = ({
  username,
  closePersonalData,
}) => {
  return (
    <PersonalData username={username} closePersonalData={closePersonalData} />
  );
};

export default App;
