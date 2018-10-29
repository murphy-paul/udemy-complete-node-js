const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', { title: titleOptions, body: bodyOptions })
    .command('list', 'List all notes')
    .command('read', 'Read a note', { title: titleOptions })
    .command('remove', 'Remove a note', { title: titleOptions })
    .help()
    .argv;
const command = argv._[0];

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
    const allNotes = notes.getAll();
    allNotes.forEach((note) => displayNote(note));
} else if (command === 'read') {
    const note = notes.readNote(argv.title);
    if (note) {
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

