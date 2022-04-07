import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import AlertDismissible from "./AlertDismissible";
import AlertDismissibleExample from "./AlertDismissibleExample";

function App() {
  var [fNumber, sNumber] = useState(0);
  useEffect(() => {
    document.title = `${fNumber}`;
  });

  return (
    <div>
      <h2>{fNumber}</h2>
      <button onClick={() => sNumber(fNumber + 1000)}>Count</button>
    </div>
  );
}

export default App;
