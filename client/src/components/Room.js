import React from "react";

const Room = ({ setCurrentRoom, roomKey, name }) => {
  const connectRoom = () => {
    setCurrentRoom(roomKey);
  };

  return (
    <div className="room" onClick={connectRoom}>
      <p>{name}</p>
    </div>
  );
};

export default Room;
