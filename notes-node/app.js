console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const argv = yargs.argv;
var command = argv._[0];

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
    notes.readNote(argv.title);
} else if (command === 'remove') {
    const res = notes.deleteNote(argv.title);
    console.log(`${res} notes deleted with title ${argv.title}`);
} else {
    console.log('Command not recognized')
}
