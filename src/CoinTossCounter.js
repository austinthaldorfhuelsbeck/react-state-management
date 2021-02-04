import React, { useState } from "react";

// function to count coin tosses
function CoinTossCounter() {
  // state object for flip results
  const [results, setResults] = useState([]);
  const [counts, setCounts] = useState({ H: 0, T: 0 });

  // function to handle click
  const handleClick = (value) => {
    setCounts({
      ...counts,
      [value]: counts[value] + 1,
    });
  };

  // function to handle delete
  const handleDeleteLast = () => {
    const last = results[results.length - 1];
    const list = results.slice(0, -1);

    setResults(list);
    if (last) {
      setCounts({
        ...counts,
        [last]: counts[last] - 1,
      });
    }
  };

  // JSX
  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads</button>
        <button onClick={() => handleClick("T")}>Tails</button>
        <button onClick={handleDeleteLast}>Delete Last</button>
        <ul>
          <li>Heads: {counts["H"]}</li>
          <li>Tails: {counts["T"]}</li>
        </ul>
      </div>
    </section>
  );
}

export default CoinTossCounter;
