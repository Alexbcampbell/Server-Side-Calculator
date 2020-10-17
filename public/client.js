$(document).ready(onReady);

function onReady() {
  console.log('HELLO');
  $('.js-button-submit').on('click', clickHandlerSubmit); //Submits numbers to be calculated
  $('.js-button-clear').on('click', clearValues); //Clears input fields
  $('.js-button-add').on('click', additionBtn);
  $('.js-button-sub').on('click', subtractionBtn);
  $('.js-button-mul').on('click', multiplyBtn);
  $('.js-button-div').on('click', divisionBtn);
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

function clickHandlerSubmit() {
  let values = [
    {
      numOne: $('.js-input-one').val(),
    },
    {
      numTwo: $('.js-input-two').val(),
    },
  ];

  submitPost(values);
}

function submitPost(inputValues) {
  console.log('CLICK WORKS');

  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: { values: inputValues },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('DID NOT CALCULATE');
    });
}
