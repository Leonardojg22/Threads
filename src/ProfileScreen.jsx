import React, { useState, useEffect } from "react";
import BottomNavBar from "./BottomNavBar";
import "./ProfileScreen.css";
import { supabase } from "./supabaseClient"; // ¡NUEVA IMPORTACIÓN!

const ThreadItem = ({ avatar, content, time, likes, replies, image }) => (
  <div className="profile-thread-item">
    <div className="profile-thread-left-column">
      <img src={avatar} alt="User avatar" className="profile-thread-avatar" />
      <div className="profile-thread-line"></div>
    </div>
    <div className="profile-thread-right-column">
      <div className="profile-thread-header">
        <span className="profile-thread-time">{time}</span>
        <span className="profile-thread-options">...</span>
      </div>
      <p className="profile-thread-content">{content}</p>
      {image && (
        <img
          src={image}
          alt="Thread content"
          className="profile-thread-image"
        />
      )}
      <div className="profile-thread-actions">
        <span className="profile-action-icon">❤️</span>
        <span className="profile-action-icon">💬</span>
        <span className="profile-action-icon">🔁</span>
        <span className="profile-action-icon">➤</span>
      </div>
      <div className="profile-thread-stats">
        {replies} replies · {likes} likes
      </div>
    </div>
  </div>
);

const ProfileScreen = ({ username, onNavigate, onLogout }) => {
  const [tab, setTab] = useState("Threads");

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThreads = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("threads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching threads:", error);
      } else {
        setThreads(data);
      }
      setLoading(false);
    };
    fetchThreads();
  }, [username]);

  const profileData = {
    avatar: "https://i.pravatar.cc/150?img=22",
    username: username,
    name: username.charAt(0).toUpperCase() + username.slice(1),
    followers: "14.5K",
    bio: "Software Developer | Building things that matter. 💡",
    link: `${username}.dev`,
    isVerified: true,
  };

  const handleLogout = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      onLogout();
    }
  };

  return (
    <>
      <header className="profile-header">
        <button className="settings-icon">⚙️</button>
        <button className="threads-global-icon">
          <svg
            width="25"
            height="21"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8759 19.4662C27.6965 19.3795 27.5144 19.296 27.3298 19.2161C27.0084 13.2427 23.7725 9.82297 18.339 9.78797C18.3144 9.78782 18.2899 9.78782 18.2653 9.78782C15.0153 9.78782 12.3124 11.1871 10.6488 13.7333L13.637 15.8009C14.8798 13.899 16.8303 13.4935 18.2667 13.4935C18.2833 13.4935 18.2999 13.4936 18.3164 13.4937C20.1054 13.5052 21.4554 14.0299 22.3292 15.0531C22.9651 15.798 23.3903 16.8273 23.6009 18.1265C22.0147 17.8545 20.2993 17.7709 18.4654 17.877C13.2995 18.1771 9.97845 21.2161 10.2015 25.4389C10.3147 27.5809 11.3726 29.4236 13.1803 30.6274C14.7087 31.645 16.6771 32.1427 18.7229 32.03C21.4246 31.8806 23.5441 30.8409 25.0227 28.9398C26.1457 27.496 26.8559 25.625 27.1695 23.2676C28.4571 24.0513 29.4113 25.0828 29.9383 26.3226C30.8344 28.4303 30.8867 31.8937 28.0849 34.7174C25.6302 37.191 22.6794 38.2611 18.22 38.2942C13.2734 38.2572 9.53228 36.657 7.09993 33.5381C4.82222 30.6176 3.64509 26.3992 3.60118 21C3.64509 15.6008 4.82222 11.3823 7.09993 8.46184C9.53228 5.34295 13.2733 3.74281 18.22 3.70573C23.2025 3.7431 27.0088 5.35093 29.5343 8.48487C30.7726 10.0217 31.7062 11.9544 32.3217 14.2079L35.8235 13.2655C35.0775 10.4917 33.9036 8.10156 32.3061 6.11931C29.0685 2.10146 24.3333 0.0426886 18.2322 0H18.2078C12.1191 0.0425403 7.43694 2.10914 4.2915 6.14235C1.49248 9.7314 0.0486657 14.7253 0.000151809 20.9852L0 21L0.000151809 21.0148C0.0486657 27.2746 1.49248 32.2687 4.2915 35.8577C7.43694 39.8908 12.1191 41.9576 18.2078 42H18.2322C23.6454 41.9622 27.461 40.5326 30.6043 37.3649C34.7168 33.2207 34.593 28.026 33.2376 24.8371C32.2651 22.5503 30.4111 20.6929 27.8759 19.4662ZM18.5295 28.3297C16.2654 28.4583 13.9132 27.4332 13.7972 25.2376C13.7112 23.6097 14.9458 21.7932 18.6685 21.5768C19.0948 21.552 19.5131 21.5399 19.9241 21.5399C21.2763 21.5399 22.5413 21.6724 23.6914 21.926C23.2624 27.3295 20.7463 28.2069 18.5295 28.3297Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="logout-button-top" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="profile-content-scroll">
        <div className="profile-info-section">
          <div className="profile-text-info">
            <h1 className="profile-name">{profileData.name}</h1>
            <span className="profile-username">
              {profileData.username}
              <span className="profile-badge">threads.net</span>
            </span>
          </div>
          <img
            src={profileData.avatar}
            alt="Avatar"
            className="profile-avatar-large"
          />
        </div>

        <p className="profile-bio">{profileData.bio}</p>
        <a
          href={`https://${profileData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          {profileData.link}
        </a>
        <span className="profile-followers">
          {profileData.followers} followers
        </span>

        <div className="profile-action-buttons">
          <button className="profile-edit-button">Edit profile</button>
          <button className="profile-share-button">Share profile</button>
        </div>

        <div className="profile-tabs">
          <button
            className={`profile-tab-button ${
              tab === "Threads" ? "tab-active" : ""
            }`}
            onClick={() => setTab("Threads")}
          >
            Threads
          </button>
          <button
            className={`profile-tab-button ${
              tab === "Replies" ? "tab-active" : ""
            }`}
            onClick={() => setTab("Replies")}
          >
            Replies
          </button>
        </div>

        <div className="profile-posts-list">
          {tab === "Threads" ? (
            loading ? (
              <div className="no-content-message">Cargando hilos...</div>
            ) : threads.length > 0 ? (
              threads.map((thread) => (
                <ThreadItem
                  key={thread.id}
                  avatar={profileData.avatar}
                  {...thread}
                />
              ))
            ) : (
              <div className="no-content-message">
                No se encontraron hilos para {profileData.username}.
              </div>
            )
          ) : (
            <div className="no-content-message">
              La sección de respuestas aún no está implementada.
            </div>
          )}
        </div>
      </div>

      <BottomNavBar currentScreen="profile" onNavigate={onNavigate} />
    </>
  );
};

export default ProfileScreen;
