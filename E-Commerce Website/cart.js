const addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach(addToCart => {
    addToCart.addEventListener("click", function(event){
        let addToCartSelected = event.target;
        addToCartSelected.classList.toggle('fa-cart-shopping');
        addToCartSelected.classList.toggle('fa-check');
    })
})
