import React, { Suspense } from "react";
import FallbackRemote from "container/FallbackRemote";
import { LoggedInProvider, useLoggedIn } from "container/LoggedInContext";

const PersonalDataApp = React.lazy(() =>
  import("personalData/App").catch(() => {
    return { default: () => <FallbackRemote name="personalData/App" /> };
  })
);

const App: React.FC = () => {
  return (
    <LoggedInProvider>
      <BankingRecordApp />
    </LoggedInProvider>
  );
};

const BankingRecordApp: React.FC = () => {
  const { loggedInUser } = useLoggedIn();

  return (
    <>
      {loggedInUser && (
        <>
          <h1>
            Hello, i am the banking record app and i see the parent context
            logged in username which is {loggedInUser}
          </h1>
          <Suspense fallback={<div>Loading Personal Data App...</div>}>
            <PersonalDataApp />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
