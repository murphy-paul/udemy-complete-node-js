console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

const username = os.userInfo().username;

const res = notes.addNote();

console.log(`isString(true): ${_.isString(true)} `)
console.log(`isString(1): ${_.isString(1)} `)
console.log(`isString('hello'): ${_.isString('hello')} `)

var filteredArray = _.uniq(['Paul', 'Jim', 'Paul', 1, 2, 3]);
console.log(filteredArray);

console.log(`Adding 3 + 4 = ${notes.add(3,4)}`);

console.log(`res: ${res}`);

fs.appendFile('greetings.txt', `Hello ${username}!\n`, (err) => {
    if (err) {
        console.log('Unable to write to file');
    } else {
        console.log('Done');
    }
});
