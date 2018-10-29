console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const username = os.userInfo().username;

const res = notes.addNote();

console.log(`Adding 3 + 4 = ${notes.add(3,4)}`);

console.log(`res: ${res}`);

fs.appendFile('greetings.txt', `Hello ${username}!\n`, (err) => {
    if (err) {
        console.log('Unable to write to file');
    } else {
        console.log('Done');
    }
});
