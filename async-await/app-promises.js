const users = [{
  id: 1,
  name: 'Paul',
  schoolId: 101
},{
  id: 2,
  name: 'Jim',
  schoolId: 999
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
},{
  id: 2,
  schoolId: 999,
  grade: 100
},{
  id: 3,
  schoolId: 101,
  grade: 80
}];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id );

    if (user) {
      resolve(user)
    } else {
      reject(`Unable to find user with id [${id}]`);
    }
  })
};

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter(g => g.schoolId === schoolId));
  });
};

const getStatus = (userId) => {
  let user;
  return getUser(userId).then(tempUser => {
    user = tempUser;
    return getGrades(tempUser.schoolId)
  }).then(grades => {
    let average = 0;

    if (grades.length > 0) {
      average = grades
                  .map(g => g.grade)
                  .reduce((a, b) => a + b) / grades.length;
      return `${user.name} has a ${average}% in the class`
    }
  })

};

getStatus(1)
  .then(status =>console.log(status) )
  .catch(err => console.log(err));