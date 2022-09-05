const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const path = require('path');
const { homedir } = require('os');



// function makeDirectory() {
//     fs.readdir('./')
//         .then((data) => duplicateCheck(data, '1234'))
//         .catch(console.error);
//     return;
// }
// function duplicateCheck(data, args) {
//     if (data == args) {
//         console.log(`already exist ${args}`);
//     } else {
//         fs.mkdir(args).catch(console.error);
//     }

//     return;
// }
// makeDirectory();
const folder = process.argv[2];
if (!folder) {
    console.error('please check foldername');
}
const home = homedir.toString();
const workingDir = path.join(home, 'pictures', folder);


console.log(workingDir);
