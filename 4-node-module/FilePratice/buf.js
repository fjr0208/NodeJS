
const buf = Buffer.from('HI');


const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);

console.log(buf2);
console.log(buf3.toString());

const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log();