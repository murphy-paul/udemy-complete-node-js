console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const argv = yargs.argv;
var command = argv._[0];


const displayNote = (note) => {
    console.log('Note found')
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created with title [${argv.title}]`);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    const note = notes.readNote(argv.title);
    if (note) {
        console.log(`found note: ${JSON.stringify(note)}`);
        displayNote(note);
    } else {
        console.log(`No note found with title ${argv.title}`);
    }
} else if (command === 'remove') {
    const res = notes.deleteNote(argv.title);
    console.log(`${res} notes deleted with title ${argv.title}`);
} else {
    console.log('Command not recognized')
}

