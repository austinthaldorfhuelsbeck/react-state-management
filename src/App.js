import React, { useState } from "react";

const handleClick = (e) => console.log(e.target);

function App() {
  return <button onClick={handleClick}>Button!</button>;
}

export default App;
