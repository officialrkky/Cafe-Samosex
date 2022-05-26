const mainCard1 = document.getElementById("mainCard1");
const mainCard2 = document.getElementById("mainCard2");
const mainCard3 = document.getElementById("mainCard3");

const btnCard1 = document.getElementById("btnCard1");
const btnCard2 = document.getElementById("btnCard2");
const btnCard3 = document.getElementById("btnCard3");

mainCard1.addEventListener('mouseenter', function(){
    btnCard1.style.transitionDuration = "0.4s"
    btnCard1.style.color = "var(--white)";
    btnCard1.style.backgroundColor = "var(--beige-strong)"
})

mainCard2.addEventListener('mouseenter', function(){
    btnCard2.style.transitionDuration = "0.4s"
    btnCard2.style.color = "var(--white)";
    btnCard2.style.backgroundColor = "var(--beige-strong)"
})

mainCard3.addEventListener('mouseenter', function(){
    btnCard3.style.transitionDuration = "0.4s"
    btnCard3.style.color = "var(--white)";
    btnCard3.style.backgroundColor = "var(--beige-strong)"
})

mainCard1.addEventListener('mouseleave', function(){
    btnCard1.style.transitionDuration = "0.4s";
    btnCard1.style.color = "var(--black)";
    btnCard1.style.backgroundColor = "var(--beige-weak)";
})

mainCard2.addEventListener('mouseleave', function(){
    btnCard2.style.transitionDuration = "0.4s";
    btnCard2.style.color = "var(--black)";
    btnCard2.style.backgroundColor = "var(--beige-weak)";
})

mainCard3.addEventListener('mouseleave', function(){
    btnCard3.style.transitionDuration = "0.4s";
    btnCard3.style.color = "var(--black)";
    btnCard3.style.backgroundColor = "var(--beige-weak)";
})