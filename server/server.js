const express = require('express');
const bodyParser = require('body-parser');
const history = [];
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  values = req.body;
  console.log(values);
  //res.sendStatus(200);
});

app.get('/calculate', (req, res) => {
  console.log(history);
  res.send(history);
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
