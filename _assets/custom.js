var trigger = document.querySelector('header');
var headerImg = document.querySelector('header img');
// var imageCount = document.querySelectorAll('article').length;

// set & update image count

// updateImageCount = () => {
//     var imageCount = document.querySelectorAll('article').length;
//     document.querySelector('h1').setAttribute('data-image-counter', imageCount);
// }
// document.addEventListener('onload', updateImageCount)



// show/hide header image
toggleClass = () => {
    headerImg.classList.toggle('show-full-header-image');
}
trigger.addEventListener('click', toggleClass);


// theme switcher
getCheckedValue = () => { 
    var checkedValue = document.querySelector('input:checked').value;
    document.body.style.backgroundColor = checkedValue;
    localStorage.setItem('body', checkedValue);
}
var currentBackground = localStorage.getItem('body');
document.body.style.backgroundColor = currentBackground;
document.querySelector('form').addEventListener('change', getCheckedValue); // for some reason this statement was before the function

// get calculated image widths - only works for images that have src attribute (not yall's data-src)
var images = document.querySelectorAll('.gallery img').forEach(function(imageSize) {
    // console.log(imageSize.width);
});