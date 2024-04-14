function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}

const transfer_first = makeTransaction(5, 3000, 23000);
const transfer_second = makeTransaction(3, 1000, 15000);
const transfer_third = makeTransaction(10, 5000, 8000);
const transfer_fourth = makeTransaction(8, 2000, 10000);
const transfer_fifth = makeTransaction(10, 500, 5000);

console.log(transfer_first); 
console.log(transfer_second); 
console.log(transfer_third); 
console.log(transfer_fourth); 
console.log(transfer_fifth);

