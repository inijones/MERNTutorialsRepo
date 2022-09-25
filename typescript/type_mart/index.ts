import products from './products'; 

const productName : string = 'fanny pack';
// Data for receipt
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

let shippingAddress : string = '575 Broadway, New York City, New York';

// Getting Product Details
const product = products.filter(product => product.name === productName)[0];

console.log(product);

// Condition for preOrder 
if (product.preOrder) console.log(`We'll send a message when your ${productName} is on it's way.`);

// Condition for free shipping 
if (Number(product.price) > 25) {
  shipping = 0;
  console.log(`We provide free shipping for ${productName}.`);
} else {
  shipping = 5;
}

// Condition for taxing
if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

// tax total
taxTotal = Number(product.price) * taxPercent;

// total
total = Number(product.price) + taxTotal + shipping;

console.log(
  `
  Product name: ${product.name}
  Shipping address: ${shippingAddress}
  Price of the product: $${Number(product.price)}
  Tax total: $${taxTotal}
  Shipping: $${shipping}
  Total Amount: $${total}
  `
);






