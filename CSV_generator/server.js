var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var bodyParser = require('body-parser')
var Convert = require('./server')

app.listen(port, () => console.log(`Port is running on ${port}`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', (req, res) => {
  console.log(req.body.input)
  Convert.post
  res.status(201);
})
