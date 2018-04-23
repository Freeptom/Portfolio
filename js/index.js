//remove class 'read-more which changes overflow from hidden to auto'

//get all elements with 'content' class
const allContent = document.getElementsByClassName('content');

//get all elements with 'read-more__button' class
const readMoreButtons = document.getElementsByClassName('read-more__button')

//convert from HTMLCollection to Array. For each button remove '.read-more' class
Array.from(readMoreButtons).forEach(function(button, i) {
  button.addEventListener('click', function() {
    //remove read-more class from first element
    allContent[i].classList.remove('read-more');
    button.classList.add('hidden');
  });
});

$(document).ready(function () {
//hamburger menu toggle
    $('.nav-toggle').click(function () {
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');

    })

})
