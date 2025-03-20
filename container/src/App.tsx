import React, { Suspense, useState } from "react";
import "./global.css";
import FallbackRemote from "./components/FallbackRemote";
import { useAuthStore } from "login/useAuthStore";

const BankingRecordApp = React.lazy(() =>
  import("bankingRecord/App").catch(() => {
    return { default: () => <FallbackRemote name="bankingRecord/App" /> };
  })
);

const LoginApp = React.lazy(() =>
  import("login/App").catch(() => {
    return { default: () => <FallbackRemote name="login/App" /> };
  })
);

const PersonalDataApp = React.lazy(() =>
  import("personalData/App").catch(() => {
    return { default: () => <FallbackRemote name="personalData/App" /> };
  })
);

const App: React.FC = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );

  const [showPersonalData, setShowPersonalData] = useState(false);

  function toggleSetShowPersonalData() {
    setShowPersonalData(!showPersonalData);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!username ? (
        <LoginApp />
      ) : (
        <>
          <BankingRecordApp />
          <button
            onClick={toggleSetShowPersonalData}
            title="setShowPersonalData"
          >
            {showPersonalData ? "Hide" : "Show"} Personal Data
          </button>
          {showPersonalData && <PersonalDataApp />}
        </>
      )}
    </Suspense>
  );
};

export default App;
