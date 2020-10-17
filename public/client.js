$(document).ready(onReady);

function onReady() {
  console.log('HELLO');
  $('.js-button-submit').on('click', submitPost); //Submits numbers to be calculated
  $('.js-button-clear').on('click', clearValues); //Clears input fields
}

function clearValues() {
  $('.js-input-one').val('');
  $('.js-input-two').val('');
}

function submitPost() {
  console.log('CLICK WORKS');

  values = [];

  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: values,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('DID NOT CALCULATE');
    });
}
