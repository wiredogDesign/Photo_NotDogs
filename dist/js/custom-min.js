var trigger=document.querySelector("header"),headerImg=document.querySelector("header img"),imageCount=document.querySelectorAll("article").length;document.querySelector("h1").setAttribute("data-image-counter",imageCount),toggleClass=()=>{headerImg.classList.toggle("show-full-header-image")},trigger.addEventListener("click",toggleClass),getCheckedValue=()=>{var e=document.querySelector("input:checked").value;document.body.style.backgroundColor=e,localStorage.setItem("body",e)};var currentBackground=localStorage.getItem("body");document.body.style.backgroundColor=currentBackground,document.querySelector("form").addEventListener("change",getCheckedValue);var images=document.querySelectorAll(".gallery img").forEach((function(e){}));