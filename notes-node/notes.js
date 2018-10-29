console.log('Starting notes.js');

const fs = require('fs');

/**
 * Attempts to fetch notes from our data file
 */
const fetchNotes = () => {
  try {
    var notesStr = fs.readFileSync('notes-data.json');
    return JSON.parse(notesStr);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
};

const addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };

  var duplicateNotes = notes.filter((note) => note.title === title );
  
  if (duplicateNotes.length === 0 ) {
    notes.push(note);

    saveNotes(notes);

    return note;
  
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