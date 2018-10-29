console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

console.log(process.argv);
var command = process.argv[2];
console.log(`command: ${command}`);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading notes');
} else if (command === 'remove') {
    console.log('Remove notes');
} else {
    console.log('Command not recognized')
}
