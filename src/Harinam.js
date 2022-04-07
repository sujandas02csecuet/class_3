import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";

function Harinam() {
  return (
    <div>
      <p class="text-primary">.text-primary</p>
      <p class="text-secondary">.text-secondary</p>
      <p class="text-success">.text-success</p>
      <p class="text-danger">.text-danger</p>
      <p class="text-warning bg-dark">.text-warning</p>
      <p class="text-info bg-dark">.text-info</p>
      <p class="text-light bg-dark">.text-light</p>
      <p class="text-dark">.text-dark</p>
      <p class="text-body">.text-body</p>
      <p class="text-muted">.text-muted</p>
      <p class="text-white bg-dark">.text-white</p>
      <p class="text-black-50">.text-black-50</p>
      <p class="text-white-50 bg-dark">.text-white-50</p>
      <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
      <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
      <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
    </div>
  );
}

export default Harinam;
