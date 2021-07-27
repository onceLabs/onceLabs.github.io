const express = require('express');
const app = express()
const port = 8080;

app.get('/', (req, res) => res.send('Hello World.'));

app.get('/flower', (req, res) => {
    res.json({
      name: 'Dandelion',
      colour: 'Blue-ish'
    });
  });

app.listen(port);
console.log(`App running on http://localhost:${port}`);
