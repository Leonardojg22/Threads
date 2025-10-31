import React, { useState, useRef, useLayoutEffect } from "react";
import "./NewThreadScreen.css";

const myAvatarUrl = "https://i.pravatar.cc/150?img=1";

const NewThreadScreen = ({ username = "kmodi21", onNavigate }) => {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  const handlePost = () => {
    if (content.trim() === "") {
      setError("Content cannot be empty.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setIsPosting(true);
    console.log(`Publicando nuevo hilo para ${username}: ${content}`);

    setTimeout(() => {
      setIsPosting(false);
      setContent("");
      setError("");
      onNavigate("feed");
    }, 2000);
  };

  const handleClose = () => {
    onNavigate("feed");
  };

  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="simulated-app-pc-container-new-thread">
      <div className="simulated-device-frame-new-thread">
        <div className="new-thread-header">
          <button className="close-button" onClick={handleClose}>
            ✕
          </button>
          <span className="header-title">New Thread</span>
          <button
            className={`post-button ${content.trim() ? "post-active" : ""}`}
            onClick={handlePost}
            disabled={!content.trim() || isPosting}
          >
            {isPosting ? "Posting..." : "Post"}
          </button>
        </div>

        <div className="new-thread-composition-area">
          <div className="thread-input-row">
            <div className="thread-left-column-compose">
              <img src={myAvatarUrl} alt="Avatar" className="compose-avatar" />
              <div className="compose-vertical-line"></div>
              <img
                src={myAvatarUrl}
                alt="Reply Avatar"
                className="reply-avatar-placeholder"
              />
            </div>

            <div className="thread-right-column-compose">
              <span className="username-display">{username}</span>

              <textarea
                ref={textareaRef}
                className="content-textarea"
                placeholder="Start a thread..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={1}
                disabled={isPosting}
              />

              {error && <span className="error-message">{error}</span>}

              <div className="compose-actions-bottom">
                <span className="attachment-icon">📎</span>
                <span className="add-to-thread-text">Add to thread</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewThreadScreen;
