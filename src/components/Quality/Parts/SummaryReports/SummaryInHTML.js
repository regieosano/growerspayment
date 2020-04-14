import React from "react";

import "./SummaryInHTML.scss";

function SummaryInHTML() {
  return (
    <>
      <div id='test-data'>
        <h3>Test# 19-0820</h3>
      </div>
      <form>
        <label htmlFor='grower'>Grower</label>
        <input id='grower' />
        <label htmlFor='company' id='comp-label'>
          Company
        </label>
        <input id='company' />
      </form>
    </>
  );
}

export default SummaryInHTML;
