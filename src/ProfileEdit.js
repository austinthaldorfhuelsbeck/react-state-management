import react, { useEffect, useState } from "react";

export default function ProfileEdit() {
  const [user, setUser] = useState({});
  console.log("render", user);

  useEffect(() => {
    console.log("useEffect");
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const userFromAPI = await response.json();
      console.log("setUser", userFromAPI);
      setUser(userFromAPI);
    }
    loadUsers();
  }, []); // Passing [] so that it only runs the effect once

  if (user.id) {
    // `user.id` is truthy after the API call returns
    return (
      <form name="profileEdit">
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" value={user.email} />
        </div>
      </form>
    );
  }
  return "Loading...";
}
