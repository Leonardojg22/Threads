import React, { useState } from "react";
import "./LoginScreen.css";
const INSTAGRAM_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";

const RegisterScreen = ({ onRegister, onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setError("");
    setIsLoading(true);

    const errorMessage = await onRegister({ email, password });

    if (errorMessage) {
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container-pc">
      <div className="login-content-wrapper-pc">
        <div className="login-card-pc">
          <h2
            style={{
              fontSize: "17px",
              color: "#8e8e93",
              fontWeight: "400",
              marginBottom: "25px",
              textAlign: "center",
              lineHeight: "1.4",
            }}
          >
            Regístrate para ver fotos y videos de tus amigos.
          </h2>
          <img
            src={INSTAGRAM_LOGO_URL}
            alt="Instagram"
            className="card-logo-pc"
          />

          <form onSubmit={handleSubmit} className="card-form-pc">
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
              placeholder="Contraseña (mínimo 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />

            {error && <p className="card-error-message-pc">{error}</p>}

            <button
              type="submit"
              className={`card-login-button-pc ${
                isLoading ? "card-disabled-pc" : ""
              }`}
              disabled={isLoading || !email || !password}
            >
              {isLoading ? "Registrando..." : "Completar Registro"}
            </button>
          </form>

          <p className="register-link-text">
            ¿Ya tienes una cuenta?
            <button
              onClick={() => onNavigate("login")}
              className="register-link"
            >
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
