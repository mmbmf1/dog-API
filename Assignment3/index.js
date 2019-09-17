'use strict'

//GET images from DOG API
function getDogImage (submitValue) {
    fetch(`https://dog.ceo/api/breed/${submitValue}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('error is', error));
}

//Display results of GET
function displayResults (responseJson) {
    console.log(responseJson);
    if (responseJson.status == 'success') {
        $('.results-img').html(`<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden');
    } else if (responseJson.status == 'error') {
        alert('That is not a dog breed! Try again!');
    }
}

//Wait for form submit and run getDogImage function
function watchForm() {
    $('form').submit(function (event){
        event.preventDefault();
        let submitValue = $('#dog-img').val().toLowerCase();
        getDogImage(submitValue);
    });
}

//Load App
$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});