import React, { useState } from "react";

import "./WeightsMoisture.scss";

function WeightsMoisture() {
  const zero = Number.parseFloat("0.00").toFixed(2);
  const [netLoss, setNetLoss] = useState(zero);
  const [moistureTotal, setMoistureTotal] = useState(zero);
  const [moistureAverage, setMoistureAverage] = useState(zero);
  const [moistureArr, setMoistureArr] = useState([0.0, 0.0, 0.0]);

  const [inOutValArr] = useState([0.0, 0.0]);

  const inOutDescArr = ["IN", "OUT"];

  const moistureDescArr = [
    "MOISTURE TEST 1",
    "MOISTURE TEST 2",
    "MOISTURE TEST 3",
  ];

  const weightsMoisture = (
    <span className='font-format'>
      <b>WEIGHTS/MOISTURE</b>
    </span>
  );

  const handleFocus = (e) => {
    e.target.select();
  };

  const onHandleInput = (e) => {
    e.preventDefault();
    let indexNum = 0;
    const name = e.target.name;
    const inputedNum = e.target.value;
    const numValue = parseFloat(inputedNum);

    switch (name) {
      case "IN":
        inOutValArr[0] = numValue;
        if (inOutValArr[1] > 0.0) {
          findTheDifference();
        }
        break;
      case "OUT":
        inOutValArr[1] = numValue;
        if (inOutValArr[1] > 0.0) {
          findTheDifference();
        } else {
          const defaultNetLoss = 0;
          setNetLoss(defaultNetLoss.toFixed(2));
        }
        break;
      case "moisturetest 1":
        indexNum = 0;
        moisturesProcess(indexNum, numValue);
        break;

      case "moisturetest 2":
        indexNum = 1;
        moisturesProcess(indexNum, numValue);
        break;

      case "moisturetest 3":
        indexNum = 2;
        moisturesProcess(indexNum, numValue);
        break;
    }
  };

  const findTheDifference = () => {
    const diff = inOutValArr[0] - inOutValArr[1];
    const netLoss = isNaN(diff) ? "-" : diff.toFixed(2);
    setNetLoss(netLoss);
  };

  const moisturesProcess = (indexNum, numValue) => {
    const updatedMoistureArr = [...moistureArr];
    updatedMoistureArr[indexNum] = numValue;
    setMoistureArr(updatedMoistureArr);
    const sumTotal = updatedMoistureArr.reduce((x, y) => x + y);
    const sumAve = sumTotal / 3;
    const validSumTotal = isNaN(sumTotal) ? "-" : sumTotal.toFixed(2);
    const validSumAve = isNaN(sumAve) ? "-" : sumAve.toFixed(2);
    setMoistureTotal(validSumTotal);
    setMoistureAverage(validSumAve);
  };

  return (
    <>
      <div className='wm-wrapper'>
        <div className='vert-line'>
          <div id='weights-moisture'>{weightsMoisture}</div>
          {inOutDescArr.map((ioDesc, index) => {
            return (
              <label className='wm-field' key={index}>
                <div
                  className='align-right font-format-small'
                  id={ioDesc.toLowerCase()}>
                  {ioDesc}:
                </div>
                <input
                  key={index}
                  type='text'
                  id={ioDesc}
                  name={ioDesc}
                  className='wm-input-size'
                  defaultValue={zero}
                  onChange={onHandleInput}
                  onClick={handleFocus}
                />
              </label>
            );
          })}
          {/*Net Loss  */}
          <label htmlFor='out' className='wm-field'>
            <div className='align-right font-format-small' id='netlosslabel'>
              NET LOSS:
            </div>
            <span id='netloss'>{netLoss}</span>
          </label>
          <label htmlFor='debris' className='wm-field'>
            <div className='align-right font-format-small' id='debris'>
              DEBRIS:
            </div>
            <input type='text' id='debris-input' className='wm-input-size' />
          </label>
          <hr id='wm-line' />
          {moistureDescArr.map((moist, index) => {
            return (
              <label className='wm-field' key={index}>
                <div className='align-right font-format-small' id='moisture-t1'>
                  {moist}:
                </div>
                <input
                  type='text'
                  id={moist.toLowerCase().replace(/\s+/, "")}
                  name={moist.toLowerCase().replace(/\s+/, "")}
                  className='wm-input-size'
                  onClick={handleFocus}
                  defaultValue={zero}
                  onChange={onHandleInput}
                />
              </label>
            );
          })}

          <label htmlFor='moisturetotal' className='wm-field'>
            <div className='align-right font-format-small' id='moisturetotal'>
              MOISTURE TOTAL:
            </div>
            <span id='moist-total'>{moistureTotal}</span>
          </label>
          <label htmlFor='moistureaverage' className='wm-field'>
            <div id='moistureaverage'>MOISTURE AVERAGE:</div>
            <span id='moist-ave'>{moistureAverage}</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default WeightsMoisture;
