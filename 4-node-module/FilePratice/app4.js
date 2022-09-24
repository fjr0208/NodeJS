const fs = require('fs');
const data = [];

const readStream = fs.createReadStream('./testfile.txt', {
    // highWaterMark: 1024
    encoding: 'utf-8'
});

readStream.on('data', da => {
    data.push(da);
    console.count('data');
});

readStream.on('end', () => {
    console.log(data.join(''));
})

readStream.on('error', error => {
    console.log(error);
});

