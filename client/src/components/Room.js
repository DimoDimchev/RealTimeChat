import React from "react";

const Room = ({ setMessages, setCurrentRoom, roomKey, name }) => {
  const connectRoom = async () => {
    setCurrentRoom({ key: roomKey, name });
  };

  return (
    <div className="room" onClick={connectRoom}>
      <p>{name}</p>
    </div>
  );
};

export default Room;
