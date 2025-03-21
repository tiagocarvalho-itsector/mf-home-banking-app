import React from "react";
import { useAuthStore } from "login/useAuthStore";
import "../../global.css";
import { BankBalance } from "./components/bankBalance";

const App: React.FC = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );

  return (
    <>
      <h1>Banking Record</h1>
      <h3 style={{ fontWeight: "normal" }}>Welcome, {username}!</h3>
      <hr className="separator" />
      <BankBalance username={username} />
    </>
  );
};

export default App;
