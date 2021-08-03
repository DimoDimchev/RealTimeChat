import React from "react";

const Room = ({ roomKey, name }) => {
  const connectRoom = () => {
    console.log(`clicked ${roomKey}`);
  };

  return (
    <div className="room" onClick={connectRoom}>
      <p>{name}</p>
    </div>
  );
};

export default Room;
