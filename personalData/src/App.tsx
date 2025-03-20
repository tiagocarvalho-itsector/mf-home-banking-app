import React from "react";
import { LoggedInProvider, useLoggedIn } from "container/LoggedInContext";

const App: React.FC = () => {
  return (
    <LoggedInProvider>
      <PersonalDataApp />
    </LoggedInProvider>
  );
};

const PersonalDataApp: React.FC = () => {
  const { loggedInUser } = useLoggedIn();

  return (
    <>
      Hello, I am the personal data app and I see the parent context logged in
      username which is {loggedInUser ? loggedInUser : "No email found."}
    </>
  );
};

export default App;
