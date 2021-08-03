import React from "react";

const ChatField = ({ currentRoom }) => {
  const [inputContent, setInputContent] = React.useState();
  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputContent.length) {
      await fetch(`http://localhost:5000/rooms/${currentRoom}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ message: inputContent, author: "Dimo" }),
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
