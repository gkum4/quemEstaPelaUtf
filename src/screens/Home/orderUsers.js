const orderUsers = (users = [], dayNumber) => {
  users.sort((_, userB) => {
    if (userB[dayNumber].subjects.length === 0) {
      return -1;
    }

    return 1;
  });

  return users;
};

export default orderUsers;
