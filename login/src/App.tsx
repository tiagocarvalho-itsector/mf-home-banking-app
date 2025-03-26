import React from "react";
import { LoginForm } from "./components/LoginForm";
import "./styles/login.css";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="login-page-background">
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
