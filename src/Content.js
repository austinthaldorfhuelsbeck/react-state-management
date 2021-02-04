import React from "react";

function Content({ loggedIn }) {
  // returns content if it's logged in
  return loggedIn && <p>CONTENT</p>;
}

export default Content;
