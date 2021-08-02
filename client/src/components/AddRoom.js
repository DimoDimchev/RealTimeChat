import React from "react";

const AddRoom = () => {
  const [name, setName] = React.useState();

  const addRoom = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/rooms", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ roomName: name }),
    });
  };
  return (
    <form className="room-form">
      <input
        type="text"
        placeholder="Add room name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={addRoom}>
        Add room
      </button>
    </form>
  );
};

export default AddRoom;
