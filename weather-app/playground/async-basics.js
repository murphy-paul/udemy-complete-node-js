console.log('Starting app.');

setTimeout(() => {
  console.log('Fire!');
}, 2000);

setTimeout(() => {
  console.log("Second callback runs")
}, 0);

console.log('Finishing up.');

