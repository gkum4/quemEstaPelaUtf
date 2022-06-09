const checkIfTimeCodeIsValid = (timeCode = 'M1') => {
  if (timeCode.length !== 2) {
    return false;
  }

  const firstChar = timeCode.charAt(0);
  const secondChar = timeCode.charAt(1);
  const number = parseInt(secondChar);

  if (isNaN(number)) {
    return false;
  }

  switch (firstChar) {
    case 'M':
      if (number >= 1 && number <= 6) {
        return true;
      }
      break;
    case 'T':
      if (number >= 1 && number <= 6) {
        return true;
      }
      break;
    case 'N':
      if (number >= 1 && number <= 5) {
        return true;
      }
      break;
    default:
      return false;
  }
};

export default checkIfTimeCodeIsValid;
