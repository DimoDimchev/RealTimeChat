import React from "react";

const ChatField = ({ socket, currentRoom }) => {
  const [inputContent, setInputContent] = React.useState();
  const [username, setUsername] = React.useState();

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputContent && username) {
      socket.current.emit("message", {
        room: currentRoom.key,
        message: inputContent,
        author: username,
      });
    }
  };
  return (
    <form className="chat-form">
      <input
        type="text"
        placeholder="type your message here"
        onChange={(e) => setInputContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your name here"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default ChatField;
