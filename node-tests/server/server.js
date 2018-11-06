const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App'
  });
  // res.status(200).send('Hello, world!');
});

app.get('/users', (req, res) => {
  const users = [{
    name: 'Jim',
    age: 21
  }, {
    name: 'Sue',
    age: 22
  }]
  res.status(200).send(users);
})

app.listen(3000);

module.exports.app = app;