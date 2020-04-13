import React from "react";

import "./Headers.scss";

function Headers() {
  return (
    <>
      {/* Headers Title */}
      <label htmlFor='headers-title' className='ksd-field'>
        <div className='align-left font-format-small' id='test-no'>
          TEST #
        </div>
        <div className='defects-input-size font-format-small' id='test-1'>
          1
        </div>
        <div className='defects-input-size font-format-small' id='test-2'>
          2
        </div>
        <div className='defects-input-size font-format-small' id='test-3'>
          3
        </div>
        <div className='defects-input-size font-format-small' id='total'>
          TOTAL
        </div>
        <div className='defects-input-size font-format-small' id='pct'>
          PCT
        </div>
      </label>
      {/* Headers Title*/}
    </>
  );
}

export default Headers;
