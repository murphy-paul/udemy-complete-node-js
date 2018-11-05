const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<H1>Hello, express!</H1>');
  res.send({
    name: 'Paul',
    age: 37,
    likes: [
      'comedy', 'food'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000,() => {
  console.log('Server is running on port 3000')
});