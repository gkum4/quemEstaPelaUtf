import checkIfSubjectDataIsCorrect from './checkIfSubjectDataIsCorrect';

const checkIfSubjectsDataIsCorrect = subjects => {
  for (const subject of subjects) {
    if (!checkIfSubjectDataIsCorrect(subject)) {
      return false;
    }
  }

  return true;
};

export default checkIfSubjectsDataIsCorrect;
