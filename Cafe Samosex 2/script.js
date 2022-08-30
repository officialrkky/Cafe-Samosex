// Effects
/*
const element = document.getElementsByClassName("");

const elementOptions = {};

const effectName = new IntersectionObserver(function (enteries, effectName){
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("className")
        }
    })
},elementOptions) 

*/
const header = document.querySelector('#header')
const home = document.querySelector("#home")
const about = document.querySelector('#about')

const headerOptions = {
    rootMargin: "-10% 0px 0px 0px"
}

const headerEffect = new IntersectionObserver(function(enteries, headerEffect){
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('headerEffect')
            console.log('1')
        }
        else{
            header.classList.remove('headerEffect')
            console.log('2')
        }
    })
}, headerOptions)

headerEffect.observe(home)


const menuBtn = document.querySelector('.hamburgerContainer');
const menuContainer = document.querySelector(".navbar")
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('menuIsOpen')
    menuContainer.classList.add('menuIsOpen')

    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('menuIsOpen')
    menuContainer.classList.remove('menuIsOpen')
    menuOpen = false;
  }
});





const aboutUsText = document.querySelector(".aboutUsText");
const aboutUsImage = document.querySelector(".aboutUsImage");

const aboutUsOptions = {
    threshold: 0.8
}

const aboutUsEffect = new IntersectionObserver(function (enteries, aboutUsEffect){
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        else{
            entry.target.classList.add("aboutUsEffect")
        }
    })
},aboutUsOptions)

aboutUsEffect.observe(aboutUsText)
aboutUsEffect.observe(aboutUsImage)

const testimonialCards = document.querySelectorAll(".testimonialCard")

const testimonialOptions = {
    threshold: 1
}

const testimonialCardEffect = new IntersectionObserver(function (enteries, testimonialCardEffect){
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        else{
            entry.target.classList.add("testimonialCardEffect")
        }
    })
},testimonialOptions)

testimonialCards.forEach(card => {
    testimonialCardEffect.observe(card)
})

const contactUsIcons = document.querySelectorAll(".contactIcons");

const contactOptions =
{
    threshold: 1,
    rootMargin: "-100px"
}

const contactEffect = new IntersectionObserver (function(enteries, contactEffect){
        enteries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }
            else{
                entry.target.classList.add("contactIconsEffect")
            }
        }
        )
    }, contactOptions)


contactUsIcons.forEach(icon => {
    contactEffect.observe(icon)
})

const bookNowInput = document.querySelectorAll('.bookNowInput')

const bookNowOptions = 
{
    threshold: 0.1,
    rootMargin: "100px"
}

const bookNowEffect = new IntersectionObserver(function(enteries, bookNowEffect){
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        else{
            entry.target.classList.add("bookNowEffect")
        }
    })
},bookNowOptions)

bookNowInput.forEach(input => {
    bookNowEffect.observe(input)
})










/* Menu Products */

const menu = document.getElementsByClassName('menu');

var foodPrices =
{
    pizza: '$7.00',
    pasta: "$5.00",
    burger: '$5.00',
    fishAndChips: "$6.00",
    wraps: '$4.00',
    tacos: '$4.00'

}

var foodMenuProducts = 
[
    {
        category: "food",
        name: 'Pizza',
        price: foodPrices.pizza,
        image: "images/menu/food/pizza.jpg"
    },
    {
        category: "food",
        name: 'Pasta',
        price: foodPrices.pasta,
        image: "images/menu/food/pasta.jpg"
    },
    {
        category: "food",
        name: 'Burger',
        price: foodPrices.burger,
        image: "images/menu/food/burger.jpg"
    },
    {
        category: "food",
        name: 'Fish and Chips',
        price: foodPrices.fishAndChips,
        image: "images/menu/food/fishAndChips.jpg"
    },
    {
        category: "food",
        name: 'Wraps',
        price: foodPrices.wraps,
        image: "images/menu/food/wraps.jpg"
    },
    {
        category: "food",
        name: 'Tacos',
        price: foodPrices.tacos,
        image: "images/menu/food/tacos.jpg"
    }
]

for(let i = 0; i < foodMenuProducts.length; i++)
{
    // Create a Product Card
    const product = document.createElement("div");
    product.classList.add('product');

    const productCategory = document.createElement("h6");
    productCategory.setAttribute("category",foodMenuProducts[i].category)

    const productImage = document.createElement("img");
    productImage.src = foodMenuProducts[i].image
    product.appendChild(productImage);

    const productName = document.createElement("h1");
    productName.innerHTML = foodMenuProducts[i].name
    product.appendChild(productName);

    const productPrice = document.createElement("h3");
    productPrice.classList.add("productPrice")
    productPrice.innerHTML = foodMenuProducts[i].price
    product.appendChild(productPrice);

    menu[0].appendChild(product)
    
}