const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// const http2 = require('http2'); // https

const name = 'Eon';
const courses = [{ name: 'html' }, { name: 'css' }, { name: 'js' }];



const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    console.log('incoming.');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    if (url === '/') {
        ejs.renderFile('./template/index.ejs', { name }).then((data) => res.end(data));
    } else if (url === '/courses') {
        ejs.renderFile('./template/courses.ejs', { courses }).then((data) => res.end(data));
    } else {
        ejs.renderFile('./template/index.ejs', { name }).then((data) => res.end(data));
    }
    res.end();
});

server.listen(8080);