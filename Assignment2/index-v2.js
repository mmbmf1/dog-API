'use strict';

//GET images from DOG API
function getDogImage (submitValue) {
    fetch(`https://dog.ceo/api/breeds/image/random/${submitValue}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//Display results of GET
function displayResults (responseJson) {
    console.log(responseJson);
    let imgArray = responseJson.message;
    let display = getImages(imgArray);
    $('.results-img').html(display);
}

//Loop thru the GET response
function getImages(imgArray) {
    let returnImages = '';
    for (let i = 0; i < imgArray.length; i++) {
        returnImages += `<img src="${imgArray[i]}" class="results-img">`;
    }
    $('.data').removeClass('hidden');
    return returnImages;
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