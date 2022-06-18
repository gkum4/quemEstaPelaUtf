import checkIfSubjectDataIsCorrect from './checkIfSubjectDataIsCorrect';

const filterSubjects = (subjects = []) => {
  const newSubjects = [...subjects];

  for (let i = 0; i < newSubjects.length; i++) {
    if (newSubjects[i].isNew && !checkIfSubjectDataIsCorrect(newSubjects[i])) {
      newSubjects.splice(i);
      i = -1;
      continue;
    }

    delete newSubjects[i].isNew;
  }

  return newSubjects;
};

export default filterSubjects;
