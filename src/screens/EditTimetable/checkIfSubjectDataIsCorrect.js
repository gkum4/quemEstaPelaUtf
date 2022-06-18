import checkIfTimeCodeIsValid from './EditSubject/checkIfTimeCodeIsValid';

const checkIfSubjectDataIsCorrect = subject => {
  if (
    !subject.name ||
    !subject.code ||
    !subject.class ||
    !subject.locationCode ||
    !subject.timeStartCode ||
    !subject.timeEndCode
  ) {
    return false;
  }

  if (
    !checkIfTimeCodeIsValid(subject.timeStartCode) ||
    !checkIfTimeCodeIsValid(subject.timeEndCode)
  ) {
    return false;
  }

  return true;
};

export default checkIfSubjectDataIsCorrect;
