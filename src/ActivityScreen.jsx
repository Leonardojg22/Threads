import React, { useState } from "react";
import BottomNavBar from "./BottomNavBar";
import "./ActivityScreen.css";

const activityData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=18",
    username: "Ms_dhoni",
    action: "Followed you",
    time: "2d",
    category: "follow",
    isVerified: true,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=17",
    username: "ankurwarikoo",
    action: "Followed you",
    time: "2d",
    category: "follow",
    isVerified: true,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=19",
    username: "Narendra_modi",
    action: "Liked your photo",
    time: "2d",
    category: "like",
    isVerified: true,
  },

  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=20",
    username: "daily_news",
    action: "replied to your thread",
    time: "1h",
    category: "reply",
    isVerified: true,
    content: '"Totalmente de acuerdo contigo."',
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=21",
    username: "coding_cat",
    action: "replied to your thread",
    time: "5h",
    category: "reply",
    isVerified: false,
    content: '"Aquí tienes el código de ejemplo que pediste."',
  },

  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "zuck",
    action: "mentioned you in a thread",
    time: "2d",
    category: "mention",
    isVerified: true,
    content: "Hey @tu_usuario, mira esto.",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=13",
    username: "vida_fitness",
    action: "mentioned you in a thread",
    time: "1d",
    category: "mention",
    isVerified: false,
    content: "¡Felicidades por tu progreso @tu_usuario!",
  },

  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=11",
    username: "Elon Musk",
    action: "Followed you",
    time: "2d",
    category: "follow",
    isVerified: true,
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "zuck",
    action: "Liked your photo",
    time: "2d",
    category: "like",
    isVerified: true,
  },
];

const ActivityItem = ({
  avatar,
  username,
  action,
  time,
  category,
  isVerified,
  content,
}) => {
  const renderActionContent = () => {
    if (category === "follow") {
      return <button className="activity-follow-button">Follow</button>;
    }
    if (category === "mention" || category === "reply") {
      return <span className="activity-content-snippet">{content}</span>;
    }
    return null;
  };

  return (
    <div className="activity-item">
      <div className="activity-left-side">
        <div className="activity-avatar-wrapper">
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className="activity-avatar"
          />
          <span className={`action-icon-badge badge-${category}`}>
            {category === "like" ? "❤️" : category === "follow" ? "👤" : "💬"}
          </span>
        </div>

        <div className="activity-text-group">
          <span className="activity-username">
            {username}
            {isVerified && <span className="verified-badge-activity">✓</span>}
          </span>
          <span className="activity-action-time">
            {action} · {time}
          </span>
        </div>
      </div>

      {renderActionContent()}
    </div>
  );
};

const ActivityScreen = ({ onNavigate }) => {
  const [filter, setFilter] = useState("All");

  const filteredActivities = activityData.filter((item) => {
    if (filter === "All") return true;

    if (filter === "Replies") return item.category === "reply";

    if (filter === "Mentions") return item.category === "mention";

    if (filter === "Follows") return item.category === "follow";
    if (filter === "Likes") return item.category === "like";

    return true;
  });

  return (
    <div className="simulated-app-pc-container-activity">
      <div className="threads-activity-frame">
        <div className="activity-content-wrapper">
          <header className="activity-header">
            <h1>Activity</h1>
          </header>
          <div className="activity-tabs">
            {["All", "Replies", "Mentions", "Follows", "Likes"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${filter === tab ? "tab-active" : ""}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="activity-list-scroll">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))
            ) : (
              <div className="no-activity-message">
                No hay actividad para mostrar en {filter}.
              </div>
            )}
          </div>
        </div>

        <BottomNavBar currentScreen="activity" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default ActivityScreen;
