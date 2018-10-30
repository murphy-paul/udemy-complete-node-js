const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }

    }, 1500);
  });
}

const asyncDouble = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      resolve(num * 2);
    } else {
      reject('Arguments must be numbers');
    }

  });
}

const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('unable to fulfill');
  }, 1000);
});

somePromise
  .then(d => console.log(d))
  .catch(e => console.log(`Error: ${e}`));

asyncAdd(5, 4)
  // .then(data => console.log(`Result: ${data}`))
  .then( d => asyncAdd(d, 5))
  .then( d => asyncDouble(d))
  .then(d => console.log(`Result: ${d}`))
  .catch(err => console.log(`Error: ${err}`));

  // somePromise
  //   .then((d) => {
  //     console.log(d)
  //   }, (err) => {
  //     console.log(err);
  //   })