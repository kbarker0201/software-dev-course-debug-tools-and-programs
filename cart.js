/*
const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const cart = [];
*/

const cart = [{name: "Laptop", price: 1000}];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i <= (cartItems.length - 1); i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
      // cartItems[i] was undefined on the last iteration because the length will always be one
      // longer than the total indexes as the indexes start at 0, not 1
      // The console tab in the browser helped me to locate this error, as it pointed out the error
      // and indicated the location of the error
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate > 0) {
    return total - total * discountRate; // Bug: Missing validation for discountRate
  } // Added if statement to validate discountRate
  return total;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  if (total.isNumber) {
    receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
    return receipt; // Added if statement to ensure that if total is not a number, it is 
                    // converted to a number. Following along in the debugger helped me to see
                    // what values were being assigned to my variables
  }
  receipt += `Total: $${Number(total).toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
