var menuBar = document.querySelector("#menu_bar");
var navLinks = document.querySelector(".nav_links");
var links = document.querySelectorAll(".nav_links li a");

navLinks.style.top = "-450px";

menuBar.addEventListener("click", function(){
    if(navLinks.style.top === "-450px"){
        navLinks.style.top = "60px";
    }
    else{
        navLinks.style.top = "-450px";
    }
});

links.forEach(function(link){
    link.addEventListener("click", function(){
        navLinks.style.top = "-450px";
    });
});