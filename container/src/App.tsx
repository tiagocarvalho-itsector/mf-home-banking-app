import React, { Suspense } from "react";
import "../../global.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthStore } from "login/useAuthStore";

const FallbackRemote = React.lazy(() =>
  import("utils/FallbackRemote").catch(() => {
    return { default: () => <FallbackRemote name="utils/FallbackRemote" /> };
  })
);

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

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );
  const location = useLocation();

  return username ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const AppContent = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );
  const { logout } = useAuthStore();

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
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/"
              element={
                username ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!username ? <LoginApp /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Suspense fallback={<></>}>
                    <BankingRecordApp />
                    <Suspense fallback={<></>}>
                      <PersonalDataApp />
                    </Suspense>
                  </Suspense>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <span>&#169; 2025 All Rights Reserved</span>
      </footer>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
