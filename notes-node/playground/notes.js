console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log(`Adding note with title [${title}] and body [${body}]`);
};

const getAll = () => {
  console.log("getting all notes");
};

const readNote = (title) => {
  console.log(`Finding note with title [${title}]`);
}

const deleteNote = (title) => {
  console.log(`Deleting note [${title}]`);
}


module.exports = {
  addNote,
  getAll,
  readNote,
  deleteNote
};