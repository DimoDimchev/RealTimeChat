import React from "react";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";
import io from "socket.io-client";

function App() {
  const [currentRoom, setCurrentRoom] = React.useState({
    key: "",
    name: "Chat",
  });
  const [rooms, setRooms] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [socket, setSocket] = React.useState();
  const [alert, setAlert] = React.useState(true);

  React.useEffect(() => {
    const socket = io("http://localhost:5000/");
    setSocket(socket);
  }, []);

  React.useEffect(() => {
    if (alert) {
      setAlert(false);
    }
  }, [alert]);

  return (
    <div className="App">
      <Rooms
        alert={alert}
        setAlert={setAlert}
        setCurrentRoom={setCurrentRoom}
        rooms={rooms}
        setRooms={setRooms}
      />
      <Chat socket={socket} messages={messages} currentRoom={currentRoom} />
    </div>
  );
}

export default App;
