const getUser = (id, callback) => {
  setTimeout(() => {
    callback({
      id,
      name: 'Paul'
    })
  }, 1000);
};

getUser(1, (user) => {
  console.log(user);
});