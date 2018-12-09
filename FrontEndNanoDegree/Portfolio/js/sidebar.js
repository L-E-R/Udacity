/*
 * Open the drawer when the menu icon is clicked.
 * Close the drawer when the body is clicked.
 */

var menu = document.querySelector('#menu');
var main = document.querySelector('body');
var drawer = document.querySelector('.sidebar');

/* add event listener when the menu icon is clicked */
menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});

/* add event listener when anywhere on the view is clicked */
main.addEventListener('click', function() {
  drawer.classList.remove('open');
});