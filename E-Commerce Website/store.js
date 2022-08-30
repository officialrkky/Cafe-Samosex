const storeProductContainer = document.getElementsByClassName("productContainer");

var prices =
{
  iphone13ProMax: "$1,600"
}


var storeProducts = 
[
  // Pro Max
  {
    category: 'iphone',
    name: 'iPhone 13 Pro Max',
    price: prices.iphone13ProMax,
    image: "img/products/iphone/13/pro-max/blue-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro Max',
    price: '$1,600',
    image: "img/products/iphone/13/pro-max/gold-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro Max',
    price: '$1,600',
    image: "img/products/iphone/13/pro-max/green-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro Max',
    price: '$1,600',
    image: "img/products/iphone/13/pro-max/grey-1.jpg"
  },
  // Pro
  {
    category: 'iphone',
    name: 'iPhone 13 Pro',
    price: '$1,400',
    image: "img/products/iphone/13/pro/gold-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro',
    price: '$1,400',
    image: "img/products/iphone/13/pro/green-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro',
    price: '$1,400',
    image: "img/products/iphone/13/pro/grey-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro',
    price: '$1,400',
    image: "img/products/iphone/13/pro/pink-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone 13 Pro',
    price: '$1,400',
    image: "img/products/iphone/13/pro/red-1.jpg"
  },
  // SE
  {
    category: 'iphone',
    name: 'iPhone SE',
    price: '$800',
    image: "img/products/iphone/13/se/black-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone SE',
    price: '$800',
    image: "img/products/iphone/13/se/red-1.jpg"
  },
  {
    category: 'iphone',
    name: 'iPhone SE',
    price: '$800',
    image: "img/products/iphone/13/se/white-1.jpg"
  },
  // Ipad Pro
  {
    category: 'ipad',
    name: 'iPad Pro',
    price: '$1000',
    image: "img/products/ipad/pro/grey-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Pro',
    price: '$1000',
    image: "img/products/ipad/pro/silver-1.jpg"
  },
  // iPad Air
  {
    category: 'ipad',
    name: 'iPad Air',
    price: '$900',
    image: "img/products/ipad/air/blue-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Air',
    price: '$900',
    image: "img/products/ipad/air/grey-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Air',
    price: '$900',
    image: "img/products/ipad/air/pink-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Air',
    price: '$900',
    image: "img/products/ipad/air/purple-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Air',
    price: '$900',
    image: "img/products/ipad/air/starlight-1.jpg"
  },
  // Standard
  {
    category: 'ipad',
    name: 'iPad',
    price: '$700',
    image: "img/products/ipad/standard/grey-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad',
    price: '$700',
    image: "img/products/ipad/standard/silver-1.jpg"
  },
  // Mini
  {
    category: 'ipad',
    name: 'iPad Mini',
    price: '$600',
    image: "img/products/ipad/mini/grey-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Mini',
    price: '$600',
    image: "img/products/ipad/mini/pink-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Mini',
    price: '$600',
    image: "img/products/ipad/mini/purple-1.jpg"
  },
  {
    category: 'ipad',
    name: 'iPad Mini',
    price: '$600',
    image: "img/products/ipad/mini/starlight-1.jpg"
  },
  // Macbook Pro
  {
    category: 'macbook',
    name: 'Macbook Pro',
    price: '$2,500',
    image: "img/products/macbook/pro/2022-macbook-grey-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Pro',
    price: '$2,500',
    image: "img/products/macbook/pro/2022-macbook-silver-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Pro',
    price: '$1,800',
    image: "img/products/macbook/pro/2021-macbook-grey-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Pro',
    price: '$1,800',
    image: "img/products/macbook/pro/2021-macbook-silver-1.jpg"
  },
  // Macbook Air
  {
    category: 'macbook',
    name: 'Macbook Air',
    price: '$2,000',
    image: "img/products/macbook/air/2022-macbook-grey-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Air',
    price: '$2,000',
    image: "img/products/macbook/air/2022-macbook-silver-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Air',
    price: '$1,500',
    image: "img/products/macbook/air/2021-macbook-gold-1.jpg"
  },
  {
    category: 'macbook',
    name: 'Macbook Air',
    price: '$1,500',
    image: "img/products/macbook/air/2021-macbook-silver-1.jpg"
  },
  // iMac
  {
    category: 'imac',
    name: 'iMac',
    price: '$2,500',
    image: "img/products/imac/standard/blue-1.jpg"
  },
  {
    category: 'imac',
    name: 'iMac',
    price: '$2,500',
    image: "img/products/imac/standard/green-1.jpg"
  },
  {
    category: 'imac',
    name: 'iMac',
    price: '$2,500',
    image: "img/products/imac/standard/pink-1.jpg"
  },
  {
    category: 'imac',
    name: 'iMac',
    price: '$2,500',
    image: "img/products/imac/standard/silver-1.jpg"
  },
  // Mac Mini
  {
    category: 'imac',
    name: 'Mac Mini',
    price: '$1,200',
    image: "img/products/imac/mini/mac-mini-2.jpg"
  },
  // Watch
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/gold-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/graphite-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/green-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/midnight-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/silver-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 7',
    price: '$600',
    image: "img/products/accessories/watch/7/starlight-1.jpg"
  },
  // Watch Series 3
  {
    category: 'accessories',
    name: 'Apple Watch Series 3',
    price: '$400',
    image: "img/products/accessories/watch/3/silver-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch Series 3',
    price: '$400',
    image: "img/products/accessories/watch/3/space-grey-1.jpg"
  },
  // Watch SE
  {
    category: 'accessories',
    name: 'Apple Watch SE',
    price: '$400',
    image: "img/products/accessories/watch/SE/gold-maize-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch SE',
    price: '$400',
    image: "img/products/accessories/watch/SE/gold-starlight-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch SE',
    price: '$400',
    image: "img/products/accessories/watch/SE/grey-midnight-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch SE',
    price: '$400',
    image: "img/products/accessories/watch/SE/silver-blue-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Apple Watch SE',
    price: '$400',
    image: "img/products/accessories/watch/SE/silver-green-1.jpg"
  },
  // Airpods 1
  {
    category: 'accessories',
    name: 'Airpods',
    price: '$165',
    image: "img/products/accessories/airpods/airpods/generation-1/airpods-1.jpg"
  },
  // Airpods 2
  {
    category: 'accessories',
    name: 'Airpods Gen 2',
    price: '$265',
    image: "img/products/accessories/airpods/airpods/generation-2/airpods-1.jpg"
  },
  // Airpods MAX
  {
    category: 'accessories',
    name: 'Airpods Max',
    price: '$850',
    image: "img/products/accessories/airpods/airpods/max/airpods-1.jpg"
  },
  // Pencil
  {
    category: 'accessories',
    name: 'Apple Pencil',
    price: '$145',
    image: "img/products/accessories/mac/apple-pencil-1.jfif"
  },
  {
    category: 'accessories',
    name: 'Apple Pencil Gen 2',
    price: '$175',
    image: "img/products/accessories/mac/apple-pencil-2.jfif"
  },
  // Keyboard 
  {
    category: 'accessories',
    name: 'Keyboard',
    price: '$170',
    image: "img/products/accessories/mac/keyboard-long-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Keyboard',
    price: '$120',
    image: "img/products/accessories/mac/keyboard-short-1.jpg"
  },
  // Mouse
  {
    category: 'accessories',
    name: 'Mouse',
    price: '$50',
    image: "img/products/accessories/mac/mouse-white-1.jpg"
  },
  {
    category: 'accessories',
    name: 'Mouse',
    price: '$50',
    image: "img/products/accessories/mac/mouse-black-1.jpg"
  },
  // Trackpad
  {
    category: 'accessories',
    name: 'Trackpad',
    price: '$50',
    image: "img/products/accessories/mac/trackpad-white-2.jpg"
  },
  {
    category: 'accessories',
    name: 'Trackpad',
    price: '$50',
    image: "img/products/accessories/mac/trackpad-black-2.jpg"
  },



]

for (let i = 0; i < storeProducts.length; i++){
    // Create Product Card
    const product = document.createElement("div");
    product.classList.add("product");
    storeProductContainer[0].appendChild(product); 

    // Images
    const image = document.createElement("img"); 
    image.classList.add("storeProductImages")
    image.src =  storeProducts[i].image;
    product.appendChild(image);    

    // Description Container
    const productDescription = document.createElement("div");
    productDescription.classList.add("productDescription");
    product.appendChild(productDescription);    

    // Category
    const category = document.createElement("span");
    category.innerHTML = storeProducts[i].category;
    productDescription.appendChild(category);   

    // Name
    const name = document.createElement("h3");
    name.innerHTML = storeProducts[i].name;
    productDescription.appendChild(name);   

    // Stars
    const starRatingContainer = document.createElement("div");
    starRatingContainer.classList.add("starRating");
    productDescription.appendChild(starRatingContainer);    

    // Individual Stars (Loop Doesnt Work)
    let star1 = document.createElement("i");
    star1.classList.add("fas");
    star1.classList.add("fa-star");
    starRatingContainer.appendChild(star1); 
    let star2 = document.createElement("i");
    star2.classList.add("fas");
    star2.classList.add("fa-star");
    starRatingContainer.appendChild(star2); 
    let star3 = document.createElement("i");
    star3.classList.add("fas");
    star3.classList.add("fa-star");
    starRatingContainer.appendChild(star3); 
    let star4 = document.createElement("i");
    star4.classList.add("fas");
    star4.classList.add("fa-star");
    starRatingContainer.appendChild(star4); 
    let star5 = document.createElement("i");
    star5.classList.add("fas");
    star5.classList.add("fa-star");
    starRatingContainer.appendChild(star5); 

    // Price
    const price = document.createElement("h4");
    price.innerHTML = storeProducts[i].price;
    productDescription.appendChild(price);  

    // Shopping Cart
    const addToCart = document.createElement("i");
    addToCart.classList.add("fa-solid");
    addToCart.classList.add("addToCart");
    addToCart.classList.add("fa-cart-shopping");
    addToCart.setAttribute("id","cart")
    product.appendChild(addToCart);   

}





