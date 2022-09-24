const fs = require('fs');

const writeStream = fs.createWriteStream('./file-7.txt');
writeStream.on('finish', () => {
    console.log('finished!');
    fs.readFile('./file-7.txt');
});

writeStream.write('hello');
writeStream.end();


