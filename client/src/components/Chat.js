import React from "react";
import ChatField from "./ChatField";

const Chat = ({ socket, currentRoom, messages }) => {
  return (
    <div className="chat-container">
      <h2>{currentRoom.name}</h2>
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((message) => <p>{message}</p>)
        ) : (
          <p>Nothing to show</p>
        )}
        <ChatField socket={socket} currentRoom={currentRoom} />
      </div>
    </div>
  );
};

export default Chat;
