const http = require('http');

const courses = [{ name: 'html' }, { name: 'css' }, { name: 'js' }];


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(courses));
        }
    }
});

server.listen(8080);