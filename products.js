export function getProduct(productId) {
  let matchingProduct;

      products.forEach((product)=>{
        if(product.id === productId){
          matchingProduct = product;
        }
      });
      return matchingProduct; 
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl(){
    return `images/ratings/rating-${this.rating.stars*10}.png`
  }
  getPrice(){
    return `₹${this.priceCents}`
  }

  extraInfoHTML(){
    return ''
  }
}

class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML(){
   // super.extraInfoHTML();
    return `
    <a href="${this.sizeChartLink}" tagrget="_blank">Size chart</a>`
  }
}
/*
const date =new Date();
console.log(date);
console.log(date.toLocaleTimeString());

console.log(this)

const object ={
  a:2,
  b: this.a
}
  
 function logThis(){
   console.log(this)
 }
 logThis();
 logThis.call('hello');

 const object3 = {
  method:()=>{
    console.log(this)
  }
 }
object3.method()
 */

export const products = [ 
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c7e",
    image: 'images/products/image1.png',
    name:'Red Nike',
    rating:{
      stars:5,
      count:34
    },
    priceCents: 39999,
    keywords: [
      "mobiles",
      "electronics",
      "phones",
      "android",
      "oppo reno",
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/NIKE1.jpg",
    name: "NIKE SHOES",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "shoes"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/img2.png",
    name: "Black boots",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/img3.png",
    name: "Brown boots",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/img4.png",
    name: "White casuals ",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/img5.png",
    name: "Casuals",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/img6.png",
    name: "White Shoes",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/img7.png",
    name: "Black Formals",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/img8.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/img9.png",
    name: "RedTap Casuals",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/img10.png",
    name: "RedTap White Casuals",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/img11.png",
    name: "White Edition",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/img12.png",
    name: "Color Casuals",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/img13.png",
    name: "Color Casuals",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/img14.png",
    name: "Boots",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/img15.png",
    name: "Campus Casuals",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/img16.png",
    name: "White ",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/img17.png",
    name: "Sports Shoes",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/img18.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/img19.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/img20.png",
    name: "Sports Shoes",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/img21.png",
    name: "White Casuals",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/img22.png",
    name: "Campus Shoes",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/img23.png",
    name: "FreeStyles",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/img24.png",
    name: "Brown Formals",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/img25.png",
    name: "Sports Boots",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/img26.png",
    name: "Classis Campus",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/img27.png",
    name: "Brown Formals",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/img28.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/img29.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/img30.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/img31.png",
    name: "Black Formals",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/img32.png",
    name: "Formals",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/img33.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/img34.png",
    name: "Color Spots",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/img35.png",
    name: "White Formals",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/img37.png",
    name: "White Formals",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/img36.png",
    name: "Black Campus",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/img38.png",
    name: "Brown Formals",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/img39.png",
    name: "Red-White ",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
].map((productDetails)=>{
  if (productDetails.type === 'clothing'){
    return new Clothing(productDetails);
  }
 return new Product(productDetails);
});