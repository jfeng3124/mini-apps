const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const port = 3030;
const url = "mongodb://localhost:27017/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  res.status(200);
})

app.post('/', (req, res) => {
  console.log(req.body)
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    useNewUrlParser = true;
    var purchase = db.db('purchase');
    purchase.collection('purchases').insertOne(req.body, (err) => {
      if (err) throw err;
      db.close();
      res.status(201);
      console.log('successfully inserted');
    })
  })
})

app.listen(port, () =>  console.log(`Port is running on ${port}!`))