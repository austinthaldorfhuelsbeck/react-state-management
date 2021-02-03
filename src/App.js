import React, { useState } from "react";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section>
      <p>Click subscribe to stay updated!</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </section>
  );
}

export default App;
