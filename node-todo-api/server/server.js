const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


let newTodo = new Todo({
  text: 'Cook dinner'
})

// newTodo.save()
//   .then((doc) => console.log(`Saved Todo ${doc}`))
//   .catch(err => console.log('Unable to save Todo'));

let nextTodo = new Todo({
  text: 'make lunch'
});

nextTodo.save()
  .then((doc) => console.log(`Saved Todo ${doc}`))
  .catch(err => console.log('Unable to save Todo', err));
