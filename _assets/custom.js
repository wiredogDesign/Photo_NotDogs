var trigger = document.querySelector('footer');
var info = document.querySelector('.info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1 + " dogs + 1 cat";
document.querySelector('header').setAttribute('data-image-counter', imageCount);
//
function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)

