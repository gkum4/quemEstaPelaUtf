const filterUsersSubjects = (usersData = [], dayNumber) => {
  const filteredUsersData = usersData.map(userData => {
    const filteredData = {
      username: userData.username,
      subjects: userData[dayNumber].subjects,
    };

    return filteredData;
  });

  return filteredUsersData;
};

export default filterUsersSubjects;
