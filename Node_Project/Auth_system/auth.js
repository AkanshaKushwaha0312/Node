let users = [];

module.exports = {
  registerUser: (username, password) => {
    users.push({ username, password });
  },
  findUser: (username, password) => {
    return users.find(user => user.username === username && user.password === password);
  },
};
