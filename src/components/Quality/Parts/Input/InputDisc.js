import React from "react";

import "./InputDisc.scss";

function InputDisc({
  description,
  total,
  percentage,
  inpt1,
  inpt2,
  inpt3,
  htmlLabel,
  idLabel,
  handleFocus,
  handleInputData,
}) {
  return (
    <>
      <label htmlFor={htmlLabel} className='ksd-field'>
        <div className='ksd-align-right font-format-small' id={idLabel}>
          {description}
        </div>
        <input
          type='text'
          id={inpt1}
          name={inpt1}
          className='design defects-input-size'
          defaultValue={0}
          onClick={handleFocus}
          onChange={handleInputData}
        />
        <input
          type='text'
          id={inpt2}
          name={inpt2}
          className='design defects-input-size defects-margin-left'
          defaultValue={0}
          onClick={handleFocus}
          onChange={handleInputData}
        />
        <input
          type='text'
          id={inpt3}
          name={inpt3}
          className='design defects-input-size defects-margin-left'
          defaultValue={0}
          onClick={handleFocus}
          onChange={handleInputData}
        />
        <input
          type='text'
          className='design defects-input-size background-final total-margin-format'
          readOnly
          value={total}
        />
        <input
          type='text'
          className='design defects-input-size background-final pct-margin-format'
          readOnly
          value={percentage}
        />
      </label>
    </>
  );
}

export default InputDisc;
