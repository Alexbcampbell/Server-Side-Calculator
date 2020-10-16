$(document).ready(onReady);

function onReady() {
  console.log('HELLO');
  $('.js-button-submit').on('click', submitPost);
  $('.js-button-clear').on('click', clearValues);
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
    data: calculations,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
      alert('DID NOT CALCULATE');
    });
}
