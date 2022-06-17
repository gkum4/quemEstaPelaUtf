const allTimeCodes = [
  'M1',
  'M2',
  'M3',
  'M4',
  'M5',
  'M6',
  'T1',
  'T2',
  'T3',
  'T4',
  'T5',
  'T6',
  'N1',
  'N2',
  'N3',
  'N4',
  'N5',
];

const checkIfTimeCodeIsValid = (timeCode = 'M1') => {
  const found = allTimeCodes.find(item => item === timeCode);

  if (!found) {
    return false;
  }

  return true;
};

export default checkIfTimeCodeIsValid;
