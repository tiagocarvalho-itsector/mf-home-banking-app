import React, { lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "../../global.css";
import { Dashboard } from "./components/dashboard";
import { useAuthStore } from "login/useAuthStore";

const PersonalDataApp = lazy(() => import("personalData/App"));

const App: React.FC = () => {
  const username = useAuthStore(
    (state: { username: string }) => state.username
  );
  const [isPersonalDataVisible, setIsPersonalDataVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isPersonalDataVisible) {
      if (!location.pathname.includes("/personal-data")) {
        navigate("/dashboard/personal-data");
      }
    } else {
      if (location.pathname.includes("/personal-data")) {
        navigate("/dashboard");
      }
    }
  }, [isPersonalDataVisible, navigate, location.pathname]);

  function handleToggleShowPersonalData() {
    setIsPersonalDataVisible((prevState) => !prevState);
  }

  return (
    <>
      <Routes>
        <Route
          path="/personal-data"
          element={
            isPersonalDataVisible && (
              <>
                <PersonalDataApp
                  username={username}
                  closePersonalData={handleToggleShowPersonalData}
                />
              </>
            )
          }
        />
      </Routes>
      <Dashboard username={username} />
      <button onClick={handleToggleShowPersonalData}>
        {isPersonalDataVisible ? "Hide Personal Data" : "Show Personal Data"}
      </button>
    </>
  );
};

export default App;
