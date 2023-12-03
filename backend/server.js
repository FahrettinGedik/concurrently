const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('api work');
});

app.get('/api', (req, res) => {
    res.json({ message: 'success', data: 'api work'});
});

app.listen(8080, () => {
    console.log('Server is listening on port 5000');
});
