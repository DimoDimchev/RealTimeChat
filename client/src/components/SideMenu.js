import React from "react";

const SideMenu = () => {
  const rooms = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    // TODO: save the data in a state and display it for the user
  };

  return (
    <div className="side-menu">
      <h2>All rooms</h2>
      <button onClick={rooms}>Hello</button>
      <div className="rooms"></div>
    </div>
  );
};

export default SideMenu;
