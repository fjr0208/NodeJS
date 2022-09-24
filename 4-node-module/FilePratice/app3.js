const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
fs.readFile('./testfile.txt', (_, data) => {
    fs.writeFile('./writeFile.txt', data, () => { });
    //calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`consumed mem : ${consumed}mb`);
});