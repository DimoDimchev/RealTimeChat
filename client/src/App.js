import React from "react";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";

function App() {
  const [rooms, setRooms] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [alert, setAlert] = React.useState(true);

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
        rooms={rooms}
        setRooms={setRooms}
      />
      <Chat messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
