// Kill Model Pop Ups -- testing
var i, elements = document.querySelectorAll('body *');for (i = 0; i < elements.length; i++) {if (getComputedStyle(elements[i]).position === 'fixed') {elements[i].parentNode.removeChild(elements[i]);}}var x = document.body;x.classList.remove('modal-open');
