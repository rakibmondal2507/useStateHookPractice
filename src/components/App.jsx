import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-GB");
  const [newTime, setNewTime] = useState(now);

  function currentTime() {
    setNewTime(new Date().toLocaleTimeString("en-GB"));
  }

  setInterval(currentTime, 1000);

  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
