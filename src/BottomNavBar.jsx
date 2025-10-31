import React from "react";

const BottomNavBar = ({ currentScreen, onNavigate }) => {
  const isSelected = (screenName) => {
    return currentScreen === screenName
      ? { opacity: 1, color: "black" }
      : { opacity: 0.5, color: "#B8B8B8" };
  };

  return (
    <div className="bottom-nav-bar">
      <span onClick={() => onNavigate("feed")} style={isSelected("feed")}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.7633 23.3452V15.354C26.7633 14.1543 26.2841 13.003 25.4128 12.1783C24.3913 11.2117 22.9742 9.9076 21.8301 8.99426C19.666 7.26658 18.5859 5.85498 16.0001 5.85498C13.4142 5.85498 12.3341 7.26658 10.17 8.99426C9.0259 9.9076 7.60877 11.2117 6.58735 12.1783C5.716 13.003 5.23682 14.1543 5.23682 15.354V23.3452C5.23682 24.8313 6.44153 25.6378 7.92763 25.6378H11.7639C12.3162 25.6378 12.7639 25.1901 12.7639 24.6378V20.3006V19.3398C12.7639 17.529 14.2319 16.061 16.0428 16.061C17.8536 16.061 19.3216 17.529 19.3216 19.3398V20.3006V24.6378C19.3216 25.1901 19.7693 25.6378 20.3216 25.6378H24.0725C25.5586 25.6378 26.7633 24.8313 26.7633 23.3452Z"
            stroke="#B8B8B8"
            stroke-width="3"
          />
        </svg>
      </span>

      <span onClick={() => onNavigate("search")} style={isSelected("search")}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1832 21.1672C22.8477 19.4945 23.8765 17.1886 23.8765 14.6425C23.8765 9.53382 19.7351 5.39246 14.6265 5.39246C9.51783 5.39246 5.37646 9.53382 5.37646 14.6425C5.37646 19.7511 9.51783 23.8925 14.6265 23.8925C17.1889 23.8925 19.508 22.8505 21.1832 21.1672ZM21.1832 21.1672L26.6235 26.6075"
            stroke="#B8B8B8"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>

      <span
        onClick={() => onNavigate("new_thread")}
        style={isSelected("new_thread")}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6.25H12.25C8.93629 6.25 6.25 8.93629 6.25 12.25V19.75C6.25 23.0637 8.93629 25.75 12.25 25.75H19.75C23.0637 25.75 25.75 23.0637 25.75 19.75V16M16.481 15.4534L24.896 7.03838"
            stroke="#B8B8B8"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>

      <span
        onClick={() => onNavigate("activity")}
        style={isSelected("activity")}
      >
        <svg
          width="32"
          height="37"
          viewBox="0 0 32 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.8983 7.38503C20.594 4.72027 17.2151 7.38502 16 8.60992C14.7848 7.38502 11.406 4.72027 8.10169 7.38503C4.79734 10.0498 4.07919 15.5791 8.70925 20.2464C13.3393 24.9137 16 25.7585 16 25.7585C16 25.7585 18.6607 24.9137 23.2907 20.2464C27.9208 15.5791 27.2026 10.0498 23.8983 7.38503Z"
            stroke="#B8B8B8"
            stroke-width="3"
          />
          <path
            d="M18.5 34.4499C18.5 35.8306 17.3807 36.9499 16 36.9499C14.6193 36.9499 13.5 35.8306 13.5 34.4499C13.5 33.0692 14.6193 31.9499 16 31.9499C17.3807 31.9499 18.5 33.0692 18.5 34.4499Z"
            fill="#EA333E"
          />
        </svg>
      </span>

      <span onClick={() => onNavigate("profile")} style={isSelected("profile")}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.46647 26.4102H23.4972C24.9332 26.4102 25.9244 24.9722 25.4134 23.6301C24.2021 20.4494 21.1523 18.3473 17.7487 18.3473H14.1657C10.7482 18.3473 7.70253 20.5033 6.56673 23.7265C6.10499 25.0369 7.07717 26.4102 8.46647 26.4102Z"
            stroke="#B8B8B8"
            stroke-width="3"
          />
          <path
            d="M16.0465 13.7291C18.2942 13.7291 20.1162 11.9071 20.1162 9.65945C20.1162 7.41184 18.2942 5.58978 16.0465 5.58978C13.7989 5.58978 11.9769 7.41184 11.9769 9.65945C11.9769 11.9071 13.7989 13.7291 16.0465 13.7291Z"
            stroke="#B8B8B8"
            stroke-width="3"
          />
        </svg>
      </span>
    </div>
  );
};

export default BottomNavBar;
