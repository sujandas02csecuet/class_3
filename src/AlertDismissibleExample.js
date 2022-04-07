import { render } from "@testing-library/react";


import React, { useState } from "react";

import { Alert,Button } from "react-bootstrap";

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap!You got an error!</Alert.Heading>
        <p>
          Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare
          Rama , Rama Rama Hare Hare
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

// render(<AlertDismissibleExample></AlertDismissibleExample>);

export default AlertDismissibleExample;
