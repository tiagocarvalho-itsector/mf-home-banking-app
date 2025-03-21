import React from "react";
import { useAuthStore } from "login/useAuthStore";
import "../../global.css";

const App: React.FC = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );
  return (
    <>
      <h1>
        Hello, i am the personal data app and i see the logged in username which
        is {username}
      </h1>
    </>
  );
};

export default App;
