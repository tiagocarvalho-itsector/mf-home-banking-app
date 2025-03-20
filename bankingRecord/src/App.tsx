import React, { Suspense } from "react";
import FallbackRemote from "container/FallbackRemote";
import { LoggedInProvider, useLoggedIn } from "container/LoggedInContext";

const PersonalDataApp = React.lazy(() =>
  import("personalData/App").catch(() => {
    return { default: () => <FallbackRemote name="personalData/App" /> };
  })
);

const App: React.FC = () => {
  const { loggedInEmail } = useLoggedIn();

  return (
    <LoggedInProvider>
      <h1>
        Hello, i am the banking record app and i see the parent context logged
        in email which is {loggedInEmail}
      </h1>
      {loggedInEmail && (
        <Suspense fallback={<div>Loading Personal Data App...</div>}>
          <PersonalDataApp />
        </Suspense>
      )}
    </LoggedInProvider>
  );
};

export default App;
