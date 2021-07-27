const express = require('express');
const app = express()

const port = process.env.HTTP_PORT || 8080; // default port

app.get('/', (req, res) => res.send('Hello World.'));
app.get('/fetchMe', (req, res) => res.send('You fetched me'));
app.get('flower', (req, res) => res.json({ name: 'Dandelion', color: 'Blue' }))

app.listen(port);
console.log(`App running on http://localhost:${port}`);
