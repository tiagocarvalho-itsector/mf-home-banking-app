import React, { useState, useEffect } from "react";
import { emailOrUsernameAndPasswordMatch } from "../services/usersLoginInfoService";
import { useAuthStore } from "../stores/useAuthStore";
import "../styles/login.css";

export const LoginForm: React.FC = () => {
  const [emailOrUsername, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    setError("");
  }, [emailOrUsername, password]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError("Please fill out all fields!");
      return;
    }

    const userLoggedIn = emailOrUsernameAndPasswordMatch(
      emailOrUsername,
      password
    );

    if (userLoggedIn) {
      login(userLoggedIn.username);
    } else {
      setError("Invalid Username/Email or Password.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Tiaguinian National Bank</h1>
        <br />
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Username/Email</label>
            <input
              type="text"
              id="emailOrUsername"
              placeholder="Username or Email"
              value={emailOrUsername}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
