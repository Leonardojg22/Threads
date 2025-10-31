import React from "react";
import "./ThreadsAuthScreen.css";

const ThreadsAuthScreen = ({ username = "Kmodi21", onThreadsLoginSuccess }) => {
  const handleThreadsLogin = () => {
    if (onThreadsLoginSuccess) {
      onThreadsLoginSuccess();
    }
    console.log(`Iniciando sesión en Threads como ${username}`);
  };

  return (
    <div className="threads-full-page-container-faithful">
      <div className="threads-title-wrapper">
        <div className="threads-moving-text-bg"></div>

        <h1 className="threads-main-title-faithful">THREADS</h1>

        <span className="threads-small-text-faithful">SAY MORE...</span>
      </div>

      <div className="threads-login-card-faithful">
        <span className="login-hint-faithful">Log in with Instagram</span>

        <button
          className="login-button-threads-faithful"
          onClick={handleThreadsLogin}
        >
          <span className="username-text-threads-faithful">{username}</span>
          <div className="confirmation-icon">✨</div>
        </button>
      </div>
    </div>
  );
};

export default ThreadsAuthScreen;
