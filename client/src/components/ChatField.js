import React from "react";

const ChatField = () => {
  const [inputContent, setInputContent] = React.useState();
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(inputContent);
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
