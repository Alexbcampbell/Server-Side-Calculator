const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function addition(numOne, numTwo) {
  return numOne + numTwo;
}

function subtraction(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}

app.post('/calculate', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
