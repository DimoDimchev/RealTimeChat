import React from "react";
import Room from "./Room";

const Rooms = () => {
  const [tasks, setTasks] = React.useState([]);

  // render all rooms
  React.useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("http://localhost:5000/");
      const data = await res.json();
      setTasks(data);
    };
    getRooms();
  }, []);

  return (
    <div className="side-menu">
      <h2>All rooms</h2>
      <div className="rooms">
        {tasks.map((task) => (
          <Room key={task._id} name={task.name} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
