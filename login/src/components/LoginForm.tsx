import React, { useState, useEffect } from "react";
import "../styles/login.css";
import {
  addUserLoginInfo,
  emailOrUsernameAndPasswordMatch,
} from "../services/usersLoginInfoService";
import { useAuthStore } from "../stores/useAuthStore";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [emailOrUsername, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const login = useAuthStore((s) => s.login);

  useEffect(() => {
    setError("");
  }, [emailOrUsername, password, confirmPassword, username]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError("Please fill out all fields!");
      return;
    }

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const userExists = emailOrUsernameAndPasswordMatch(
        emailOrUsername,
        password
      );

      if (userExists) {
        setError("User with email " + emailOrUsername + " already exists.");
        return;
      }

      addUserLoginInfo({
        username,
        email: emailOrUsername,
        password,
      });

      setError("");
      alert("Account created successfully!");
      setIsSignUp(false);
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

  function isFormValid() {
    if (isSignUp) {
      return (
        username &&
        emailOrUsername &&
        password &&
        confirmPassword &&
        password === confirmPassword
      );
    }
    return emailOrUsername && password;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Tiaguinian National Bank</h1>
        <form onSubmit={handleLogin}>
          {isSignUp && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">{!isSignUp ? "Username/" : ""}Email</label>
            <input
              type="text"
              id="emailOrUsername"
              placeholder={`${!isSignUp ? "Username/" : "Enter your "}Email`}
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

          {isSignUp && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn" disabled={!isFormValid()}>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="toggle-signup">
          <p>
            {isSignUp ? "Already have" : "Don't have"} an account?
            <span
              className="toggle-link"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
