$(document).ready(onReady);

let operator;

function onReady() {
  console.log('HELLO');
  $('.js-button-submit').on('click', clickHandlerSubmit); //Submits numbers to be calculated
  $('.js-button-clear').on('click', clearValues); //Clears input fields
  $('.js-button-add').on('click', additionBtn);
  $('.js-button-sub').on('click', subtractionBtn);
  $('.js-button-mul').on('click', multiplyBtn);
  $('.js-button-div').on('click', divisionBtn);
}

function clickHandlerSubmit() {
  let values = {
    numOne: $('.js-input-one').val(),
    numTwo: $('.js-input-two').val(),
    operator: operator,
  };

  submitPost(values);
}

function submitPost(values) {
  console.log('CLICK WORKS');

  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: values,
  })
    .then(function (response) {
      console.log(response);
      submitGet();
    })
    .catch(function (err) {
      console.log(err);
      alert('DID NOT CALCULATE');
    });
}

function submitGet() {
  $.ajax({
    type: 'GET',
    url: '/calculate',
  })
    .then(function (response) {
      console.log(response);
      render(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('DID NOT CALCULATE');
    });
}

function render(values) {
  $('.js-calc-history').empty();
  for (let i = 0; i < values.length; i++) {
    let equation = values[i];
    $('.js-calc-total').text(equation.total);
    $('.js-calc-history').append(
      `<li>${equation.numOne} ${equation.operator} ${equation.numTwo} = ${equation.total}</li>`
    );
  }
}

function additionBtn() {
  console.log('+');
  operator = '+';
}

function subtractionBtn() {
  console.log('-');
  operator = '-';
}

function multiplyBtn() {
  console.log('*');
  operator = '*';
}

function divisionBtn() {
  console.log('/');
  operator = '/';
}

function clearValues() {
  $('.js-input-one').val('');
  $('.js-input-two').val('');
}
