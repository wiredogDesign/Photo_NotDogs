var trigger=document.querySelector("footer"),info=document.querySelector(".info"),imageCount=document.querySelectorAll(".thumbnail-trigger").length-1;function toggleClass(){info.classList.toggle("show-info")}document.querySelector("h1").setAttribute("data-image-counter",imageCount),trigger.addEventListener("click",toggleClass);var backgroundColour=document.querySelector("input.name");