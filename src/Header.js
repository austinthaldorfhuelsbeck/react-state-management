import React from "react";

function Header({ loggedIn, handleLoggedInClick }) {
  // button text changes based on loggedIn state
  // and calls toggleLoggedIn on click
  return (
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
  );
}

export default Header;
