const roomTitle1 = document.getElementById("roomTitle1");
const roomTitle2 = document.getElementById("roomTitle2");
const roomTitle3 = document.getElementById("roomTitle3");
const roomTitle4 = document.getElementById("roomTitle4");

const room1 = document.getElementById("room1");
const room2 = document.getElementById("room2");
const room3 = document.getElementById("room3");
const room4 = document.getElementById("room4");

roomTitle1.addEventListener("mouseover", function(){
    document.getElementById("room1").style.transitionDuration = "0.5s";
    document.getElementById("room1").style.transform = "translateX(0px)";
});

roomTitle1.addEventListener("mouseleave", function(){
    document.getElementById("room1").style.transitionDuration = "0.5s";
    document.getElementById("room1").style.transitionDelay = "1s";
    document.getElementById("room1").style.transform = "translateX(-320px)";
});

roomTitle2.addEventListener("mouseover", function(){
    document.getElementById("room2").style.transitionDuration = "0.5s";
    document.getElementById("room2").style.transform = "translateX(0px)";
});

roomTitle2.addEventListener("mouseleave", function(){
    document.getElementById("room2").style.transitionDuration = "0.5s";
    document.getElementById("room2").style.transitionDelay = "1s";
    document.getElementById("room2").style.transform = "translateX(-320px)";
});

roomTitle3.addEventListener("mouseover", function(){
    document.getElementById("room3").style.transitionDuration = "0.5s";
    document.getElementById("room3").style.transform = "translateX(0px)";
});

roomTitle3.addEventListener("mouseleave", function(){
    document.getElementById("room3").style.transitionDuration = "0.5s";
    document.getElementById("room3").style.transitionDelay = "1s";
    document.getElementById("room3").style.transform = "translateX(-320px)";
});

roomTitle4.addEventListener("mouseover", function(){
    document.getElementById("room4").style.transitionDuration = "0.5s";
    document.getElementById("room4").style.transform = "translateX(0px)";
});

roomTitle4.addEventListener("mouseleave", function(){
    document.getElementById("room4").style.transitionDuration = "0.5s";
    document.getElementById("room4").style.transitionDelay = "1s";
    document.getElementById("room4").style.transform = "translateX(-320px)";
});

