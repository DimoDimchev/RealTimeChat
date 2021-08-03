import React from "react";

const Room = ({
  messages,
  setMessages,
  socket,
  setCurrentRoom,
  roomKey,
  name,
}) => {
  const connectRoom = async () => {
    setCurrentRoom({ key: roomKey, name });
    if (messages) {
      setMessages([]);
    }
    socket.current.emit("joinRoom", roomKey);
  };

  return (
    <div className="room" onClick={connectRoom}>
      <p>{name}</p>
    </div>
  );
};

export default Room;
