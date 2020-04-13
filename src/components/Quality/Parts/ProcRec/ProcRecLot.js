import React from "react";

import "./ProcRecLot.scss";

function ProcRecLot() {
  const sampleData = <span id='sample-data'>SAMPLE DATA</span>;

  const changeCertNum = <span id='change-cert-format'>Change Cert Number</span>;

  const certNum = <span id='cert-number'>13668</span>;
  const numValue = "00001";
  return (
    <>
      <div className='wrapper'>
        <form id='samrec-proc-cert'>
          <p>{sampleData}</p>
          <label htmlFor='name' className='field'>
            <div
              className='align-right font-format-small'
              id='received-date-lable'>
              SAMPLE RECEIVED DATE:
            </div>
            <input type='date' id='rec-date' />
          </label>
          <label htmlFor='processor' className='field'>
            <div className='align-right font-format-small' id='processor-label'>
              PROCESSOR:
            </div>
            <select id='processor' className='input-format sample-format'>
              <option value='select processor'>Select Processor</option>
              <option value='hgo'>HGO</option>
              <option value='processor3'>Processor 3</option>
              <option value='new_processor'>+ New Processor</option>
            </select>
          </label>
          <label className='field top-format-cert'>
            <div className='align-right font-format-small' id='cert-label'>
              CERT #:
            </div>
            <span>
              {certNum}&nbsp;&nbsp;{changeCertNum}
            </span>
          </label>
        </form>
        <form className='form-margins'>
          <label htmlFor='lot' className='ls-field' id='lot-margin'>
            <div className='font-format-small' id='lot-label'>
              LOT #:
            </div>
            <select
              id='lot'
              className='input-format sample-format'
              style={{ width: "250px" }}>
              <option value='selectLot'>Select Lot #</option>
              <option value='#1234'>Lot #1234</option>
              <option value='#5678'>Lot #5678</option>
              <option value='newLot#'>+ New Lot #</option>
            </select>
          </label>
          <label className='ls-field top-format'>
            <div className='align-right font-format-small' id='sample-no'>
              SAMPLE #:
            </div>
            <input
              type='text'
              id='sample-num'
              className='input-format sample-format'
              placeholder={numValue}
              style={{ width: "250px" }}
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default ProcRecLot;
