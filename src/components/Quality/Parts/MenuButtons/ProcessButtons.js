import React from "react";

import { faPrint, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProcessButtons.scss";

function ProcessButtons({ handlePrintResults }) {
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} size={"1x"} />;
  const printIcon = <FontAwesomeIcon icon={faPrint} size={"1x"} />;

  return (
    <>
      <div className='align-right'>
        <ul className='menu-buttons-group'>
          <li className='m-button'>
            <button
              type='button'
              className='btn btn-md round bg-color-hover'
              id='new-button'>
              NEW
            </button>
          </li>
          <li className='m-button'>
            <button
              type='button'
              className='btn btn-md round bg-color-hover'
              id='edit-button'>
              EDIT
            </button>
          </li>
          <li className='m-button'>
            <button
              className='btn btn-md round bg-color-hover'
              id='print-button'
              onClick={handlePrintResults}>
              <span>{printIcon}</span>&nbsp;&nbsp;PRINT RESULTS
            </button>
          </li>
          <li className='m-button' id='delete'>
            <button className='btn btn-md round bg-color-hover' id='del-button'>
              <span>{trashIcon}</span>&nbsp;&nbsp;DELETE
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProcessButtons;
