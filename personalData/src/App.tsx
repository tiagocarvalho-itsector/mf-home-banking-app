import React from "react";
import { useAuthStore } from "login/useAuthStore";
import "../../global.css";
import { PersonalData } from "./components/personalData";

const App: React.FC = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );
  return (
    <>
      <PersonalData username={username} />
    </>
  );
};

export default App;
