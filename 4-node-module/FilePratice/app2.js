const fs = require('fs').promises;

// read

fs.readFile('./text2.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// write

fs.writeFile('./text2.txt', 'you are so fucking strong guy!!!')
    .then(() => {
        fs.appendFile('./text2.txt', 'and also genious!!!')
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

// copy
fs.copyFile('./text2.txt', './text2-copy.txt')
    .catch(console.error);





