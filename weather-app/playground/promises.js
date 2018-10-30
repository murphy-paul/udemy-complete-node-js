const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('unable to fulfill');
  }, 1000);
});

somePromise
  .then(d => console.log(d))
  .catch(e => console.log(`Error: ${e}`));

  // somePromise
  //   .then((d) => {
  //     console.log(d)
  //   }, (err) => {
  //     console.log(err);
  //   })