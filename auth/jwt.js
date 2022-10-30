const jwt = require('jsonwebtoken');

const id = '111';
const secret = '222;'

const token = jwt.sign({
    id,
    isAdmin: true
}, secret, { expiresIn: 2 });

const edit = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzExNzI5NX0.iNQMDYe2kIudl7csKrZTTprorimRa2z-aYP9mNBjNCc';

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });

}, 3000);