const menuBtn = document.querySelector('.hamburgerContainer');
const hiddenMenuContainer = document.querySelector('.hiddenMenuContainer');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('menuIsOpen')
    hiddenMenuContainer.classList.add('menuIsOpen')
    menuOpen = true;
    
  }
  else{
    menuBtn.classList.remove('menuIsOpen')
    hiddenMenuContainer.classList.remove('menuIsOpen')
    menuOpen = false;
  }
});