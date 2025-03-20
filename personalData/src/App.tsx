import React from "react";
import { LoggedInProvider, useLoggedIn } from "container/LoggedInContext";

const App: React.FC = () => {
  const { loggedInEmail } = useLoggedIn();

  return (
    <LoggedInProvider>
      <h1>
        Hello, i am the personal data app and i see the parent context logged in
        email which is {loggedInEmail}
      </h1>
    </LoggedInProvider>
  );
};

export default App;
