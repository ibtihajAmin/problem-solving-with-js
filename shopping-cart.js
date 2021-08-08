// problem statement:
// suppose you want to buy many things from e-commerce shop.
// When you add your products to cart , total product price is calculated automatically and show to 
// your dashboard.Write a program.



//create cart array which contains many products object
let cart = [
    { productName: 'Wrist-Watch', price: 120, quantity: 2 },
    { productName: 'Water-Bottle', price: 280, quantity: 1 },
    { productName: 'T-shirt', price: 180, quantity: 4 }
]

let cartTotal = 0;

//calculating total product price
for (let product of cart) {
    let productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}






console.log(cartTotal);