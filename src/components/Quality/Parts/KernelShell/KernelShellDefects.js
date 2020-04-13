import React, { useState } from "react";

import "./KernelShellDefects.scss";

import Headers from "./Parts/Headers";
import InputDisc from "../Input/InputDisc";

import {
  getKernelDescriptionArray,
  getShellDescriptionArray,
  descKArraysInZeroes,
  descSArraysInZeroes,
  kernelTotalZeroArray,
  shellTotalZeroArray,
  kernelPercentageArray,
  shellPercentageArray,
} from "../../../../variables/kernelShellVars";

function KernelShellDefects() {
  // Initialize description arrays KERNEL and SHELL
  const kernelDescriptionArray = getKernelDescriptionArray();
  const shellDescriptionArray = getShellDescriptionArray();

  // Declare hooks for state
  const [xKTotalArr, setXKTotalArr] = useState(kernelTotalZeroArray());
  const [xSTotalArr, setXSTotalArr] = useState(shellTotalZeroArray());
  const [xKPctArr, setKXPctArr] = useState(kernelPercentageArray());
  const [xSPctArr, setSXPctArr] = useState(shellPercentageArray());
  const [descriptionKArrays] = useState(descKArraysInZeroes());
  const [descriptionSArrays] = useState(descSArraysInZeroes());

  const handleFocus = (e) => {
    e.target.select();
  };

  const onInputData = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const descIndex = Number.parseInt(name.charAt(name.length - 3));
    const codeTypeOfInput = name.charAt(name.length - 4);
    const valueData = Number.parseInt(e.target.value);
    const numIndex = Number.parseInt(name.charAt(name.length - 1)) - 1;
    // call kernel defects or shell defects
    switch (codeTypeOfInput) {
      case "k":
        kernelDefectsProcess(descIndex, numIndex, valueData);
        break;
      case "s":
        shellDefectsProcess(descIndex, numIndex, valueData);
        break;
      case "b":
        shellDefectsProcess(4, numIndex, valueData);
        break;
    }
  };
  // Common methods between Kernel and Shell
  const commonMethods = (singleDescArray, numIndex, valueData) => {
    singleDescArray[numIndex] = valueData;
    const singleArrTotal = singleDescArray.reduce((x, y) => x + y);
    const validPercent = (singleArrTotal / 3.0).toFixed(2);
    const percentage = isNaN(validPercent) ? "-" : validPercent;
    const validTotal = isNaN(singleArrTotal) ? "-" : singleArrTotal;
    return { validTotal, percentage };
  };

  // Kernel Process
  const kernelDefectsProcess = (descIndex, numIndex, valueData) => {
    const singleDescArray = descriptionKArrays[descIndex];
    const { validTotal, percentage } = commonMethods(
      singleDescArray,
      numIndex,
      valueData
    );
    const updatedTotalValueInArray = [...xKTotalArr];
    updatedTotalValueInArray[descIndex] = validTotal;
    const updatedPercentValueInArray = [...xKPctArr];
    updatedPercentValueInArray[descIndex] = percentage;
    setXKTotalArr(updatedTotalValueInArray);
    setKXPctArr(updatedPercentValueInArray);
  };

  // Shell Process
  const shellDefectsProcess = (descIndex, numIndex, valueData) => {
    const singleDescArray = descriptionSArrays[descIndex];
    const { validTotal, percentage } = commonMethods(
      singleDescArray,
      numIndex,
      valueData
    );
    const updatedTotalValueInArray = [...xSTotalArr];
    updatedTotalValueInArray[descIndex] = validTotal;
    const updatedPercentValueInArray = [...xSPctArr];
    updatedPercentValueInArray[descIndex] = percentage;
    setXSTotalArr(updatedTotalValueInArray);
    setSXPctArr(updatedPercentValueInArray);
  };

  // Kernel View Input Fields
  const kernelInputFields = kernelDescriptionArray.map((description, index) => {
    return (
      <InputDisc
        key={index}
        description={description
          .substring(0, description.length - 2)
          .concat(":")}
        total={xKTotalArr[index]}
        percentage={xKPctArr[index]}
        inpt1={description.toLowerCase().concat("-1")}
        inpt2={description.toLowerCase().concat("-2")}
        inpt3={description.toLowerCase().concat("-3")}
        htmlLabel={description.toLowerCase()}
        idLabel={description
          .substring(0, description.length - 2)
          .toLowerCase()
          .replace(/\s+/, "")}
        handleInputData={onInputData}
        handleFocus={handleFocus}
      />
    );
  });

  // Shell View Input Fields
  const shellInputFields = shellDescriptionArray.map((description, index) => {
    return (
      <InputDisc
        key={index}
        description={description
          .substring(0, description.length - 2)
          .concat(":")}
        total={xSTotalArr[index]}
        percentage={xSPctArr[index]}
        inpt1={description.toLowerCase().concat("-1")}
        inpt2={description.toLowerCase().concat("-2")}
        inpt3={description.toLowerCase().concat("-3")}
        htmlLabel={description.toLowerCase()}
        idLabel={description
          .substring(0, description.length - 2)
          .toLowerCase()
          .replace(/\s+/, "")}
        handleInputData={onInputData}
        handleFocus={handleFocus}
      />
    );
  });

  // Jumbo View Input Fields
  const jumboInputFields = (
    <InputDisc
      description={"JUMBO:"}
      total={xSTotalArr[4]}
      percentage={xSPctArr[4]}
      inpt1={"jumbo-1"}
      inpt2={"jumbo-2"}
      inpt3={"jumbo-3"}
      htmlLabel={"jumbo"}
      idLabel={"jumbo"}
      handleInputData={onInputData}
      handleFocus={handleFocus}
    />
  );

  return (
    <>
      <div className='ksd-wrapper'>
        {/* Kernel Defects Form */}
        <form className='form-format'>
          <div id='kernel-defects'>KERNEL DEFECTS</div>
          <Headers />
          {kernelInputFields}
        </form>
        {/* End  Form */}

        {/* Shell Defects Form */}
        <form className='form-format'>
          <div id='shell-defects'>SHELL DEFECTS</div>
          <Headers />
          {shellInputFields}
          <br />
          <Headers />
          {jumboInputFields}
        </form>
        {/* End  Form */}
      </div>
    </>
  );
}

export default KernelShellDefects;
