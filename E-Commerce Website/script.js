const menuBtn = document.querySelector('.hamburgerContainer');
const navbar = document.querySelector('.navbar');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('menuIsOpen')
    navbar.classList.add('navBarShown')
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('menuIsOpen')
    navbar.classList.remove('navBarShown')

    menuOpen = false;
  }
});





