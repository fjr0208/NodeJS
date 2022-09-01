const { setFips } = require('crypto');
const fs = require('fs');

//rename(..., callback(error, data))
//renameSync(...)
//promises.rename.ten().catch(0)'
try {
    fs.renameSync('./file.txt', './file-new.txt');

} catch (error) {
    console.log(error);
}

fs.rename('./file-new.txt', './file-renew.txt', (error) => {
    console.log(error);
});

fs.promises.rename('./file-renew.txt', './file-7.txt')
    .then(() => console.log('done!'))
    .catch((err) => console.log(err));

console.log('hello');