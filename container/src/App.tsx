import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../../global.css";
import { useAuthStore } from "login/useAuthStore";

const BankingRecordApp = lazy(() => import("bankingRecord/App"));
const LoginApp = lazy(() => import("login/App"));

const App: React.FC = () => {
  const { username, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    } else if (username && window.location.pathname === "/login") {
      navigate("/dashboard");
    }
  }, [username, navigate]);

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
            <Route path="/dashboard/*" element={<BankingRecordApp />} />
            <Route path="/login/*" element={<LoginApp />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <span>&#169; 2025 All Rights Reserved</span>
      </footer>
    </div>
  );
};

export default App;
