const express = require('express');
const bodyParser = require('body-parser');
const history = [];
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const inputVals = req.body.values;
  //console.log(inputVals);
  //res.sendStatus(200);
  function calculator
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
