const filterUsersSubjects = (usersData = [], dayNumber) => {
  const filteredUsersData = usersData.map(userData => {
    const filteredData = {
      _id: userData._id,
      username: userData.username,
      subjects: userData[dayNumber].subjects,
    };

    return filteredData;
  });

  return filteredUsersData;
};

export default filterUsersSubjects;
