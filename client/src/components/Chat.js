import React from "react";
import ChatField from "./ChatField";

const Chat = ({ socket, currentRoom, messages, setMessages }) => {
  return (
    <div className="chat-container">
      <h2>{currentRoom.name}</h2>
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div className="messageContainer">
              <p className="author">{message.author}</p>
              <p className="message">{message.message}</p>
            </div>
          ))
        ) : (
          <p>Nothing to show</p>
        )}
        <ChatField socket={socket} currentRoom={currentRoom} />
      </div>
    </div>
  );
};

export default Chat;
