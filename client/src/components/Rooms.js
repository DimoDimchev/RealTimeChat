import React from "react";
import Room from "./Room";
import AddRoom from "./AddRoom";

const Rooms = ({
  socket,
  setMessages,
  setCurrentRoom,
  alert,
  setAlert,
  rooms,
  setRooms,
  messages,
}) => {
  // render all rooms
  React.useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      setRooms(data);
    };
    if (rooms.length && !alert) {
      return;
    }
    getRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms, alert]);

  return (
    <div className="side-menu">
      <h2>All rooms</h2>
      <AddRoom alert={alert} setAlert={setAlert} />
      <div className="rooms">
        {rooms.map((room) => (
          <Room
            socket={socket}
            key={room._id}
            messages={messages}
            setMessages={setMessages}
            roomKey={room._id}
            setCurrentRoom={setCurrentRoom}
            name={room.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
