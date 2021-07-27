"use strict";

var express = require('express');

var app = express();
var port = process.env.HTTP_PORT || 8080; // default port

app.get('/', function (req, res) {
  return res.send('Hello World.');
});
app.get('/fetchMe', function (req, res) {
  return res.send('You fetched me');
});
app.get('flower', function (req, res) {
  return res.json({
    name: 'Dandelion',
    color: 'Blue'
  });
});
app.listen(port);
console.log("App running on http://localhost:".concat(port));
