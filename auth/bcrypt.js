const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(`pass : ${password}, hashed: ${hashed}`);


const result = bcrypt.compareSync('abc1233', hashed);
console.log(result);