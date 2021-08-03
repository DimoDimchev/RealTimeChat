import React from "react";

const ChatField = ({ socket, currentRoom }) => {
  const [inputContent, setInputContent] = React.useState();
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputContent) {
      socket.emit("message", {
        room: currentRoom.key,
        message: inputContent,
        author: "Dimo",
      });
    }
  };
  return (
    <form className="chatForm">
      <input
        type="text"
        placeholder="type your message here"
        onChange={(e) => setInputContent(e.target.value)}
      />
      <button type="submit" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default ChatField;
