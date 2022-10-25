var trigger = document.querySelector('footer');
var info = document.querySelector('.info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1 + " images of no consequence";
document.querySelector('header').setAttribute('data-image-counter', imageCount);
//
function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)

