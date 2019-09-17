'use strict'

//GET images from DOG API
function getDogImage (submitValue) {
    fetch(`https://dog.ceo/api/breeds/image/random/${submitValue}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//Wait for form submit and run getDogImage function
function watchForm() {
    $('form').submit(function (event){
        event.preventDefault();
        let submitValue = $('#num-img').val();
        getDogImage(submitValue);
    });
}

//Load App
$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});