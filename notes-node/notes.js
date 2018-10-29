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

/**
 * 
 * @param {string} title of the note to find
 * @returns {{title: string, body:string}} note with matching title
 */
const readNote = (title) => {
  const notes = fetchNotes().filter((note) => note.title === title);

  return notes[0];
}

/**
 * Attempt to delete a note by it's title
 * 
 * @param {string} title of the note to delete
 * @returns {int} no of notes deleted
 */
const deleteNote = (title) => {
  const allNotes = fetchNotes();
  const filtered = allNotes.filter((note) => note.title !== title);

  if (allNotes.length > filtered.length) {
    saveNotes(filtered);
    return allNotes.length - filtered.length;
  } else {
    return 0
  }
}


module.exports = {
  addNote,
  getAll,
  readNote,
  deleteNote
};