import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "./DataTable";
import Charts from "./Charts";
import SimpleLineChart from "./SimpleLineChart";

function App() {
  const [count, setCount] = useState(0);

  var [fName, sName] = useState("this is first name..");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      {/* <SimpleLineChart></SimpleLineChart> */}
      <Charts></Charts>
    </div>
  );
}

export default App;
