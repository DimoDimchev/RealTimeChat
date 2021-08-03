import React from "react";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";
import io from "socket.io-client";

function App() {
  const [currentRoom, setCurrentRoom] = React.useState();
  const [rooms, setRooms] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [alert, setAlert] = React.useState(true);

  React.useEffect(() => {
    if (alert) {
      setAlert(false);
    }
  }, [alert]);

  React.useEffect(() => {
    const socket = io("http://localhost:5000/");
    socket.on("connection");
    socket.on("message", (data) => {
      setMessages((previousMessages) => {
        return [...previousMessages, data];
      });
    });
  }, []);

  return (
    <div className="App">
      <Rooms
        alert={alert}
        setAlert={setAlert}
        setCurrentRoom={setCurrentRoom}
        rooms={rooms}
        setRooms={setRooms}
      />
      <Chat
        messages={messages}
        currentRoom={currentRoom}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;
