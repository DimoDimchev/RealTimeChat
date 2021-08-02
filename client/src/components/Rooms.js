import React from "react";
import Room from "./Room";
import AddRoom from "./AddRoom";

const Rooms = ({ rooms, setRooms }) => {
  // render all rooms
  React.useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      setRooms(data);
    };
    getRooms();
  });

  return (
    <div className="side-menu">
      <h2>All rooms</h2>
      <AddRoom />
      <div className="rooms">
        {rooms.map((room) => (
          <Room key={room._id} name={room.name} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
