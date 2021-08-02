import React from "react";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";

function App() {
  const [rooms, setRooms] = React.useState([]);

  return (
    <div className="App">
      <Rooms rooms={rooms} setRooms={setRooms} />
      <Chat />
    </div>
  );
}

export default App;
