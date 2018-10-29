console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body,
  };

  try {
    var notesStr = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesStr);
  } catch (err) {
    // console.log(err);
  }

  var duplicateNotes = notes.filter((note) => note.title === title );
  
  if (duplicateNotes.length === 0 ) {
    notes.push(note);
  
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
  } else {
    console.log(`Note with title [${title}] already exists`);
  }


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