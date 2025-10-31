import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const allThreadsData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=6",
    username: "viajero_digital",
    time: "3m",
    content:
      "Buscando recomendaciones de series para el fin de semana. ¿Alguna joya oculta?",
    likes: "1.2k",
    isReply: false,
    isVerified: false,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=7",
    username: "lector_nocturno",
    time: "236m",
    content:
      "Acabo de terminar un libro increíble, lo recomiendo totalmente. #Libros",
    likes: "41",
    isVerified: true,
    isReply: false,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=8",
    username: "cocina_con_alma",
    time: "7m",
    content:
      "¡La clave para un buen pan de masa madre está en la paciencia! 🍞",
    likes: "9",
    isReply: false,
    isVerified: false,
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=9",
    username: "tech_guru",
    time: "8m",
    content:
      "React Hooks sigue siendo lo mejor que le ha pasado al frontend en años. ¿Opiniones?",
    likes: "6",
    isReply: true,
    replyToAvatar: "https://i.pravatar.cc/150?img=10",
    isVerified: false,
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    username: "arte_moderno",
    time: "241m",
    content:
      "Hoy en el museo encontré una pieza que te hace cuestionar todo. El arte es increíble.",
    likes: "2",
    isReply: false,
    isVerified: false,
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=12",
    username: "crypto_max",
    time: "1h",
    content: "Bitcoin tocando nuevos máximos. ¿Nos vamos a la luna? 🚀",
    likes: "88k",
    isReply: false,
    isVerified: true,
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=13",
    username: "vida_fitness",
    time: "5m",
    content:
      "No olviden su rutina de estiramiento. Es tan importante como el levantamiento.",
    likes: "15",
    isReply: false,
    isVerified: false,
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=14",
    username: "daily_news",
    time: "10m",
    content:
      "El clima de la semana próxima será inestable en el norte del país.",
    likes: "3",
    isReply: true,
    replyToAvatar: "https://i.pravatar.cc/150?img=15",
    isVerified: false,
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=16",
    username: "coding_cat",
    time: "15m",
    content: "Error 404: Café no encontrado.",
    likes: "7",
    isReply: false,
    isVerified: false,
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/150?img=17",
    username: "musica_indie",
    time: "40m",
    content:
      "Escuchando la nueva banda sonora de la película, ¡es una obra maestra!",
    likes: "12",
    isReply: false,
    isVerified: false,
  },
];

const ThreadItem = ({ thread }) => {
  return (
    <div className="thread-item-container">
      <div className="thread-left-column">
        <img
          src={thread.avatar}
          alt={`${thread.username}'s avatar`}
          className="thread-avatar"
        />
      </div>
      <div className="thread-content-column">
        <div className="thread-header">
          <span className="thread-username">{thread.username}</span>
          {thread.isVerified && <span className="verified-badge">✓</span>}
          <span className="thread-time">{thread.time}</span>
          <span className="thread-options">...</span>
        </div>
        <p className="thread-text">{thread.content}</p>
        <div className="thread-actions">
          <span className="action-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4999 4.96677C15.7806 2.79129 12.9999 4.96677 11.9999 5.96677C10.9999 4.96677 8.2193 2.79129 5.49996 4.96677C2.78062 7.14226 2.18961 11.6564 5.99996 15.4667C9.81031 19.2771 11.9999 19.9667 11.9999 19.9667C11.9999 19.9667 14.1896 19.2771 17.9999 15.4667C21.8103 11.6564 21.2193 7.14226 18.4999 4.96677Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span className="action-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12C4 16.4183 7.58172 20 12 20C13.2552 20 14.4428 19.7109 15.5 19.1958L19.5 20L19 15.876C19.6372 14.7278 20 13.4063 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span className="action-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12C4 16.4183 7.58172 20 12 20C13.2552 20 14.4428 19.7109 15.5 19.1958L19.5 20L19 15.876C19.6372 14.7278 20 13.4063 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                stroke="black"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span className="action-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 5.5H4.5L10 11M19.5 5.5L12 18.5L10 11M19.5 5.5L10 11"
                stroke="black"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="thread-stats">
          <span className="stat-item">{thread.likes} likes</span>
        </div>
      </div>
    </div>
  );
};

const ThreadsFeedScreen = ({ username, onLogout, onNavigate }) => {
  const [shuffledThreads, setShuffledThreads] = useState([]);

  useEffect(() => {
    const newOrder = shuffleArray(allThreadsData);
    setShuffledThreads(newOrder);
  }, []);

  return (
    <>
      <header className="threads-header-feed">
        <div className="app-logo">
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8759 19.4662C27.6965 19.3795 27.5144 19.296 27.3298 19.2161C27.0084 13.2427 23.7725 9.82297 18.339 9.78797C18.3144 9.78782 18.2899 9.78782 18.2653 9.78782C15.0153 9.78782 12.3124 11.1871 10.6488 13.7333L13.637 15.8009C14.8798 13.899 16.8303 13.4935 18.2667 13.4935C18.2833 13.4935 18.2999 13.4936 18.3164 13.4937C20.1054 13.5052 21.4554 14.0299 22.3292 15.0531C22.9651 15.798 23.3903 16.8273 23.6009 18.1265C22.0147 17.8545 20.2993 17.7709 18.4654 17.877C13.2995 18.1771 9.97845 21.2161 10.2015 25.4389C10.3147 27.5809 11.3726 29.4236 13.1803 30.6274C14.7087 31.645 16.6771 32.1427 18.7229 32.03C21.4246 31.8806 23.5441 30.8409 25.0227 28.9398C26.1457 27.496 26.8559 25.625 27.1695 23.2676C28.4571 24.0513 29.4113 25.0828 29.9383 26.3226C30.8344 28.4303 30.8867 31.8937 28.0849 34.7174C25.6302 37.191 22.6794 38.2611 18.22 38.2942C13.2734 38.2572 9.53228 36.657 7.09993 33.5381C4.82222 30.6176 3.64509 26.3992 3.60118 21C3.64509 15.6008 4.82222 11.3823 7.09993 8.46184C9.53228 5.34295 13.2733 3.74281 18.22 3.70573C23.2025 3.7431 27.0088 5.35093 29.5343 8.48487C30.7726 10.0217 31.7062 11.9544 32.3217 14.2079L35.8235 13.2655C35.0775 10.4917 33.9036 8.10156 32.3061 6.11931C29.0685 2.10146 24.3333 0.0426886 18.2322 0H18.2078C12.1191 0.0425403 7.43694 2.10914 4.2915 6.14235C1.49248 9.7314 0.0486657 14.7253 0.000151809 20.9852L0 21L0.000151809 21.0148C0.0486657 27.2746 1.49248 32.2687 4.2915 35.8577C7.43694 39.8908 12.1191 41.9576 18.2078 42H18.2322C23.6454 41.9622 27.461 40.5326 30.6043 37.3649C34.7168 33.2207 34.593 28.026 33.2376 24.8371C32.2651 22.5503 30.4111 20.6929 27.8759 19.4662ZM18.5295 28.3297C16.2654 28.4583 13.9132 27.4332 13.7972 25.2376C13.7112 23.6097 14.9458 21.7932 18.6685 21.5768C19.0948 21.552 19.5131 21.5399 19.9241 21.5399C21.2763 21.5399 22.5413 21.6724 23.6914 21.926C23.2624 27.3295 20.7463 28.2069 18.5295 28.3297Z"
              fill="black"
            />
          </svg>
        </div>
      </header>

      <main className="threads-feed-scroll">
        {shuffledThreads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
      </main>
    </>
  );
};

export default ThreadsFeedScreen;
