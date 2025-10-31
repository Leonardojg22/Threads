import React from "react";
import BottomNavBar from "./BottomNavBar";

const SearchIcon = () => (
  <svg
    aria-label="Buscar"
    color="#8e8e93"
    fill="#8e8e93"
    height="20"
    role="img"
    viewBox="0 0 24 24"
    width="20"
  >
    <path
      d="M18.5 10.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM15.5 15.5 22 22"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

const suggestedProfiles = [
  {
    id: 1,
    avatar: "https://i.imgur.com/uR2N8Qp.png",
    username: "threadsapp",
    name: "Threads",
    followers: "35 followers",
    isVerified: true,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=17",
    username: "ankurwarikoo",
    name: "Ankur Warikoo",
    followers: "916K followers",
    isVerified: true,
    secondaryName: "Ankur Warikoo",
  },
  {
    id: 3,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png",
    username: "Facebook",
    name: "Facebook",
    followers: "242K followers",
    isVerified: true,
  },
  {
    id: 4,
    avatar: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/nba.png",
    username: "nba",
    name: "nbaclub",
    followers: "3.2M followers",
    isVerified: true,
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=13",
    username: "shakira",
    name: "shakira",
    followers: "3.2M followers",
    isVerified: true,
  },
  {
    id: 6,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
    username: "Instagram",
    name: "instagram",
    followers: "...",
    isVerified: true,
  },
];

const VerifiedBadge = () => <span className="verified-badge">✓</span>;

const ProfileItem = ({
  avatar,
  username,
  name,
  followers,
  isVerified,
  secondaryName,
}) => (
  <div className="profile-item">
    <div className="profile-info-group">
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className={`profile-avatar ${
          username === "threadsapp" ? "profile-avatar-square" : ""
        }`}
      />
      <div className="text-group">
        <div className="username">
          {username}
          {isVerified && <VerifiedBadge />}
        </div>
        <div className="name">{name}</div>
        <div>{followers}</div>
      </div>
    </div>
    <button className="follow-button">Follow</button>
  </div>
);

const ThreadsSearchScreen = ({ onNavigate }) => {
  return (
    <div className="simulated-app-pc-container-search">
      <div className="threads-device-frame">
        <div className="threads-search-container-scroll">
          <header className="search-header">
            <h1>Search</h1>
          </header>

          <div className="search-input-container">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>

          <div className="search-results-list">
            {suggestedProfiles.map((profile) => (
              <ProfileItem key={profile.id} {...profile} />
            ))}
          </div>
        </div>

        <BottomNavBar currentScreen="search" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default ThreadsSearchScreen;
