const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send('Hello World');
});

app.listen(3005, () => console.log('Listening.....'));
