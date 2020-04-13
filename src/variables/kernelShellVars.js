const zero = Number.parseFloat("0.00").toFixed(2);

export const getKernelDescriptionArray = () => {
  return [
    "WORMSK0",
    "RANCIDK1",
    "MOLDK2",
    "DECAYK3",
    "SERIOUS DAMAGEK4",
    "BLANKSK5",
    "OFF COLORK6",
    "SHRIVELK7",
  ];
};

export const getShellDescriptionArray = () => {
  return ["STAINS0", "SPLITSS1", "MACHINE DAMAGES2", "OFF TYPES3"];
};

export const descKArraysInZeroes = () => {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
};

export const descSArraysInZeroes = () => {
  return [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
};

export const kernelTotalZeroArray = () => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

export const shellTotalZeroArray = () => {
  return [0, 0, 0, 0, 0];
};

export const kernelPercentageArray = () => {
  return [zero, zero, zero, zero, zero, zero, zero, zero, zero];
};

export const shellPercentageArray = () => {
  return [zero, zero, zero, zero, zero];
};
