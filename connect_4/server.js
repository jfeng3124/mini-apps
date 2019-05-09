const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3124;
const path = require('path');

app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(port, () => console.log(`Server is running on ${port}`));

