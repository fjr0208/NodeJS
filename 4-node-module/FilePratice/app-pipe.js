const fs = require('fs');

const readStream = fs.createReadStream('./testfile.txt');
const writeStream = fs.createWriteStream('./file-7.txt');

const piping = readStream.pipe(writeStream);
piping.on('finish', () => {
    console.log('done!');

});