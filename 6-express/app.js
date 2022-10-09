import express from 'express';
const app = express();

app.get('/eon/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    res.send('hi!');
});

app.use(express.json());

app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(8080);