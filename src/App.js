import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  // useState for logging in; defaults to false
  const [loggedIn, setLoggedIn] = useState(false);
  // function for toggling logged in status
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  // pass loggedIn state to both as props,
  // pass toggleLoggedIn function to Header
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
    </div>
  );
}

export default App;
