import React from "react";
import { LoginForm } from "./components/LoginForm";
import "./styles/login.css";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="login-page-background">
      <img
        src="https://i.ibb.co/rGVhGd1t/image-removebg-preview.png"
        alt="image-removebg-preview"
        className="login-bank-logo"
      />
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
