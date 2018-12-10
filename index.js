var cart = [];

function getCart() {
 return cart;
}
function setPrice(){ //Generate random price
  return Math.floor((Math.random()*100))
}
function doSum(x,y){
 return x+y
}
function getPrices(c){ //Return an array of all the prices in your cart
  return c.map(x => {x.itemPrice})
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
  if (cart.length === 0){ //If theres nothing there don't go any further
    return "Your shopping cart is empty."
  }
  
  //Format example: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  var firstPart = 'In your cart, you have ';
  var secondPart = '';
  var thirdPart = '.';
  
  //Make a list of formated items: ["itemName at $itemPrice"]
  var itemParts = cart.map(x => {return `${x.itemName} at \$${x.itemPrice}`;});
  
  //Add and to the last item, grammar is important
  if (itemParts.length > 1){
    itemParts.push(`and ${itemParts.pop()}`);
  }
  
  secondPart = itemParts.join(', ')
  return firstPart + secondPart + thirdPart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
