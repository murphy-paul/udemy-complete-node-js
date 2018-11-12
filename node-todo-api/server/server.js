const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});


let newTodo = new Todo({
  text: 'Cook dinner'
})

// newTodo.save()
//   .then((doc) => console.log(`Saved Todo ${doc}`))
//   .catch(err => console.log('Unable to save Todo'));

let nextTodo = new Todo({
  text: 'Make lunch',
  completed: true,
  completedAt: 1234
})


nextTodo.save()
  .then((doc) => console.log(`Saved Todo ${doc}`))
  .catch(err => console.log('Unable to save Todo'));
