import React, { Suspense, useState } from "react";
import "../../global.css";
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
  const { logout } = useAuthStore();

  const [showPersonalData, setShowPersonalData] = useState(false);

  function toggleSetShowPersonalData() {
    setShowPersonalData(!showPersonalData);
  }

  return (
    <div className="app-wrapper">
      <header className="header-bar">
        <div className="header-content">
          <span className="bank-name">Tiaguinian National Bank</span>
          {username && (
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          )}
        </div>
      </header>

      <main className="main-content">
        {!username ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginApp />
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <BankingRecordApp />
            <button
              onClick={toggleSetShowPersonalData}
              title="setShowPersonalData"
            >
              {showPersonalData ? "Hide" : "Show"} Personal Data
            </button>
            {showPersonalData && (
              <Suspense fallback={<div>Loading...</div>}>
                <PersonalDataApp />
              </Suspense>
            )}
          </Suspense>
        )}
      </main>

      <footer className="footer">
        <span>&#169; 2025 All Rights Reserved</span>
      </footer>
    </div>
  );
};

export default App;
