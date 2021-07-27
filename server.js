const express = require('express');
const app = express()
import path from 'path';
const port = process.env.HTTP_PORT || 4001;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => res.send('Hello World.'));

app.get('/flower', (req, res) => {
    res.json({
      name: 'Dandelion',
      colour: 'Blue-ish'
    });
  });

app.listen(port);
console.log(`App running on http://localhost:${port}`);
