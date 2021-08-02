import React from "react";

const Chat = ({ messages, setMessages }) => {
  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((message) => <p>{message}</p>)
        ) : (
          <p>Nothing to show</p>
        )}
      </div>
    </div>
  );
};

export default Chat;
