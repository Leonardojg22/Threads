import React, { useState, useRef, useLayoutEffect } from "react";
import "./NewThreadScreen.css";
import { supabase } from "./supabaseClient";

const myAvatarUrl = "https://i.pravatar.cc/150?img=1";

const NewThreadScreen = ({ username = "kmodi21", onNavigate }) => {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  const handlePost = async () => {
    if (content.trim() === "") {
      setError("Content cannot be empty.");
      setTimeout(() => setError(""), 3000);
      return;
    }
    setIsPosting(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setError("You must be logged in to post.");
      setIsPosting(false);
      return;
    }

    const { error: insertError } = await supabase.from("threads").insert([
      {
        content: content.trim(),
        username: username,
        user_id: user.id,
        avatar: myAvatarUrl, // Using the static avatar for now
        likes: 0,
      },
    ]);

    if (insertError) {
      setError(insertError.message);
    } else {
      onNavigate("feed");
    }

    setIsPosting(false);
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
                onChange={(e) => {
                  setContent(e.target.value);
                  if (error) setError("");
                }}
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
