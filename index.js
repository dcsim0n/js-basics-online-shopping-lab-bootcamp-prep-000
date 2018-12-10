var cart = [];

function getCart() {
 return cart;
}
function setPrice(){ //Generate random price
  return Math.floor((Math.random()*100))
}
function getPrices(c){ //Return an array of all the prices in your cart
  return c.map(x => {return x.itemPrice})
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName: item, itemPrice: setPrice()};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  //If theres nothing there don't go any further
  if (cart.length === 0){ 
    return "Your shopping cart is empty."
  }
  
  //Format example: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  var firstPart = 'In your cart, you have ';
  var thirdPart = '.';
  
  //Make a list of formated items: ["itemName at $itemPrice"]
  var itemParts = cart.map(x => {return `${x.itemName} at \$${x.itemPrice}`;});
  
  //Add 'and' to the last item, grammar is important
  if (itemParts.length > 1){
    itemParts.push(`and ${itemParts.pop()}`);
  }
  
  var secondPart = itemParts.join(', ');
  return firstPart + secondPart + thirdPart;
}

function total() {
  const doSum = (x,y) => x + y;
  var prices = getPrices(cart);
  console.log(prices);
  return prices.reduce(doSum)
}

function removeFromCart(item) {
  
  
}

function placeOrder(cardNumber) {
  // write your code here
}
