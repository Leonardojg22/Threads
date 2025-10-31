import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

import LoginScreen from "./LoginScreen";
import ThreadsFeedScreen from "./ThreadsFeedScreen";
import ThreadsSearchScreen from "./ThreadsSearchScreen";
import NewThreadScreen from "./NewThreadScreen";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./ProfileScreen";
import BottomNavBar from "./BottomNavBar";
import RegisterScreen from "./RegisterScreen";
import ThreadsAuthScreen from "./ThreadsAuthScreen";

import "./LoginScreen.css";
import "./ThreadsFeedScreen.css";
import "./ActivityScreen.css";
import "./NewThreadScreen.css";
import "./ThreadsSearchScreen.css";
import "./ProfileScreen.css";
import "./RegisterScreen.css";
import "./ThreadsAuthScreen.css";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("loading");
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);

      if (session) {
        const username = session.user.email
          ? session.user.email.split("@")[0]
          : "Usuario";
        setLoggedInUsername(username);
        setCurrentScreen("threads_auth");
      } else {
        setCurrentScreen("login");
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (session) {
          const username = session.user.email
            ? session.user.email.split("@")[0]
            : "Usuario";
          setLoggedInUsername(username);
          setCurrentScreen("threads_auth");
        } else {
          setLoggedInUsername("");
          setCurrentScreen("login");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleNavigate = (screenName) => {
    if (
      [
        "feed",
        "search",
        "new_thread",
        "activity",
        "profile",
        "login",
        "register",
        "threads_auth",
      ].includes(screenName)
    ) {
      setCurrentScreen(screenName);
      console.log(`Navegando a: ${screenName}`);
    } else {
      setCurrentScreen("feed");
      console.log(
        `Navegación a ${screenName} no implementada. Volviendo al feed.`
      );
    }
  };

  const handleLogin = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return error.message;
    }
    return null;
  };

  const handleRegister = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return error.message;
    }
    alert(
      "Registro exitoso. Revisa tu email para confirmar la cuenta. Iniciando sesión..."
    );
    return null;
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (loading || currentScreen === "loading") {
    return <div className="loading-container">Cargando sesión...</div>;
  }

  if (currentScreen === "threads_auth") {
    return (
      <ThreadsAuthScreen
        username={loggedInUsername}
        onThreadsLoginSuccess={() => handleNavigate("feed")}
      />
    );
  }

  if (currentScreen === "new_thread") {
    return (
      <NewThreadScreen
        username={loggedInUsername}
        onNavigate={handleNavigate}
      />
    );
  }

  if (currentScreen === "search") {
    return (
      <div className="simulated-app-pc-container-search">
        <div className="threads-device-frame">
          <ThreadsSearchScreen onNavigate={handleNavigate} />
          <BottomNavBar
            currentScreen={currentScreen}
            onNavigate={handleNavigate}
          />
        </div>
      </div>
    );
  }

  if (currentScreen === "profile") {
    return (
      <div className="simulated-app-pc-container-profile">
        <div className="threads-profile-frame">
          <ProfileScreen
            username={loggedInUsername}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        </div>
      </div>
    );
  }

  if (currentScreen === "activity") {
    return <ActivityScreen onNavigate={handleNavigate} />;
  }

  if (currentScreen === "feed") {
    return (
      <div className="simulated-app-pc-container-feed">
        <div className="simulated-device-frame-feed">
          <ThreadsFeedScreen
            username={loggedInUsername}
            onLogout={handleLogout}
            onNavigate={handleNavigate}
          />
          <BottomNavBar
            currentScreen={currentScreen}
            onNavigate={handleNavigate}
          />
        </div>
      </div>
    );
  }

  if (currentScreen === "register") {
    return (
      <RegisterScreen onRegister={handleRegister} onNavigate={handleNavigate} />
    );
  }

  if (currentScreen === "login") {
    return <LoginScreen onLogin={handleLogin} onNavigate={handleNavigate} />;
  }

  return null;
}
