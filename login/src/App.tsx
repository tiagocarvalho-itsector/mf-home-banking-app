import React from "react";
import { LoginForm } from "./components/LoginForm";
import "./styles/login.css";

const App: React.FC = () => {
  return (
    <div className="login-page-background">
      <LoginForm />;
    </div>
  );
};

export default App;
