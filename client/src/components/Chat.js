import React from "react";
import ChatField from "./ChatField";

const Chat = ({ currentRoom, messages, setMessages }) => {
  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((message) => <p>{message}</p>)
        ) : (
          <p>Nothing to show</p>
        )}
        <ChatField currentRoom={currentRoom} />
      </div>
    </div>
  );
};

export default Chat;
