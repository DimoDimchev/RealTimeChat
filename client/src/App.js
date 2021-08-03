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
  const [alert, setAlert] = React.useState(true);

  const socketRef = React.useRef();

  React.useEffect(() => {
    socketRef.current = io("http://localhost:5000/");

    socketRef.current.on("message", (data) => {
      setMessages((previousMessages) => {
        return [...previousMessages, data];
      });
    });

    socketRef.current.on("output-messages", (data) => {
      setMessages((previousMessages) => {
        return [...previousMessages, ...data];
      });
    });
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
        socket={socketRef}
        setCurrentRoom={setCurrentRoom}
        rooms={rooms}
        setRooms={setRooms}
        messages={messages}
        setMessages={setMessages}
      />
      <Chat
        socket={socketRef}
        messages={messages}
        setMessages={setMessages}
        currentRoom={currentRoom}
      />
    </div>
  );
}

export default App;
