const express = require('express');
const bodyParser = require('body-parser');
const history = [];
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  equation = req.body;
  calculate(equation.numOne, equation.operator, equation.numTwo);
  function calculate(valOne, valOp, valTwo) {
    let calcVal = 0;
    if (valOp === '+') {
      calcVal = Number(valOne) + Number(valTwo);
    } else if (valOp === '-') {
      calcVal = Number(valOne) - Number(valTwo);
    } else if (valOp === '*') {
      calcVal = Number(valOne) * Number(valTwo);
    } else if (valOp === '/') {
      calcVal = Number(valOne) / Number(valTwo);
    }

    console.log(calcVal);
    finalValue = calcVal;
  }
  history.push({
    valueOne: equation.numOne,
    operator: equation.operator,
    valueTwo: equation.numTwo,
    total: finalValue,
  });
  res.sendStatus(200);
});

app.get('/calculate', (req, res) => {
  console.log(history);
  res.send(history);
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Listening on PORT: ', PORT);
});
