const fs = require('fs');

var originalNote = {
  title: 'secret',
  body: 'hello world',
};

const originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteStr);

var noteStr = fs.readFileSync('notes.json');
const note = JSON.parse(noteStr);

console.log(note);