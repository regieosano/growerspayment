import React, { useState } from "react";

import "./WeightsMoisture.scss";

function WeightsMoisture({ onHandleProcess }) {
  const zero = Number.parseFloat("0.00").toFixed(2);
  const [netLoss, setNetLoss] = useState(zero);
  const [moistureTotal, setMoistureTotal] = useState(zero);
  const [moistureAverage, setMoistureAverage] = useState(zero);
  const [moistureArr, setMoistureArr] = useState([0.0, 0.0, 0.0]);

  const WEIGHTIN = "WEIGHTIN";
  const WEIGHTOUT = "WEIGHTOUT";
  const DEBRIS = "DEBRIS";
  const MOISTURETEST1 = "MOISTURETEST 1";
  const MOISTURETEST2 = "MOISTURETEST 2";
  const MOISTURETEST3 = "MOISTURETEST 3";

  const [inOutValArr] = useState([0.0, 0.0]);

  const inOutDescArr = ["IN", "OUT", "NET LOSS", "DEBRIS"];

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
        onHandleProcess(0, inOutValArr[0], WEIGHTIN);
        break;
      case "OUT":
        inOutValArr[1] = numValue;
        if (inOutValArr[1] > 0.0) {
          findTheDifference();
        } else {
          const defaultNetLoss = 0;
          setNetLoss(defaultNetLoss.toFixed(2));
        }
        onHandleProcess(0, inOutValArr[1], WEIGHTOUT);
        break;
      case "DEBRIS":
        inOutValArr[2] = numValue;
        onHandleProcess(0, inOutValArr[2], DEBRIS);
        break;
      case "MOISTURETEST 1":
        indexNum = 0;
        moisturesProcess(indexNum, numValue);
        moistureArr[0] = numValue;
        onHandleProcess(0, moistureArr[0], MOISTURETEST1);
        break;

      case "MOISTURETEST 2":
        indexNum = 1;
        moisturesProcess(indexNum, numValue);
        moistureArr[1] = numValue;
        onHandleProcess(1, moistureArr[1], MOISTURETEST2);
        break;

      case "MOISTURETEST 3":
        indexNum = 2;
        moisturesProcess(indexNum, numValue);
        moistureArr[2] = numValue;
        onHandleProcess(2, moistureArr[2], MOISTURETEST3);
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
            if (ioDesc !== "NET LOSS") {
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
            } else {
              return (
                <label htmlFor='out' className='wm-field' key={index}>
                  <div
                    className='align-right font-format-small'
                    id='netlosslabel'>
                    NET LOSS:
                  </div>
                  <span id='netloss'>{netLoss}</span>
                </label>
              );
            }
          })}

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
                  name={moist.toUpperCase().replace(/\s+/, "")}
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
