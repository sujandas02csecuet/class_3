import { Alert,Button } from "react-bootstrap";
import React, { useState } from "react";

function AlertDismissible() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going!</Alert.Heading>
        <p>
          Hare Krishan Hare Krishan Krishna Krishna Hare Hare Hare Rama Hare
          Rama Rama Rama Hare Hare
        </p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );
}

export default AlertDismissible;
