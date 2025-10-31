import React, { useState } from "react";
import "./LoginScreen.css";

const INSTAGRAM_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

const LoginScreen = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setError("");

    setIsLoading(true);
    const errorMessage = await onLogin({ email, password });

    if (errorMessage) {
      setIsLoading(false);
      setError(errorMessage);
    }
  };

  return (
    <div className="login-page-container-pc">
      <div className="login-content-wrapper-pc">
        <div className="login-card-pc">
          <div className="card-language-text">English (US)</div>

          <img
            src={INSTAGRAM_LOGO_URL}
            alt="Instagram"
            className="card-logo-pc"
          />

          <form onSubmit={handleLogin} className="card-form-pc">
            <input
              type="email"
              className="card-input-pc"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="card-input-pc"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="card-error-message-pc">{error}</p>}

            <button
              type="submit"
              className={`card-login-button-pc ${
                isLoading ? "card-disabled-pc" : ""
              }`}
              disabled={isLoading || !email || !password}
            >
              {isLoading ? "Iniciando..." : "Log in"}
            </button>
          </form>

          <p className="register-link-text">
            ¿No tienes una cuenta?
            <button
              onClick={() => onNavigate("register")}
              className="register-link"
            >
              Registrarse
            </button>
          </p>
        </div>

        <div className="meta-footer-standalone">&infin; Meta</div>
      </div>
    </div>
  );
};

export default LoginScreen;
