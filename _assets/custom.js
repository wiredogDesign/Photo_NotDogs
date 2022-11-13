var trigger = document.querySelector('footer');
var info = document.querySelector('.info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1;
document.querySelector('h1').setAttribute('data-image-counter', imageCount);
//

function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)
//

var backgroundColour = document.querySelector('input.name');

