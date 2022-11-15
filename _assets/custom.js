var trigger = document.querySelector('footer');
var info = document.querySelector('.info');
var imageCount = document.querySelectorAll('.thumbnail-trigger').length-1;
document.querySelector('h1').setAttribute('data-image-counter', imageCount);

// show/hide info panel
function toggleClass() {
    info.classList.toggle('show-info');
}
trigger.addEventListener('click', toggleClass)


// theme switcher

document.querySelector('form').addEventListener('change', getCheckedValue)
function getCheckedValue() { 
    const checkedValue = document.querySelector('input:checked').value;
    document.body.style.backgroundColor = checkedValue;
    localStorage.setItem('body', checkedValue);

}
var currentBackground = localStorage.getItem('body');
document.body.style.backgroundColor = currentBackground;


