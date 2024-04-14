function getShippingCost(country, price) {
    switch (country) {
        case "China":
            price = 100;
            break;
        case "Chile":
            price = 250;
            break;
        case "Australia":
            price = 170;
            break;
        case "Jamaica":
            price = 120;
            break;
        default:
            return `Sorry, there is no delivery to your country`;
    }
    return `Shipping to ${country} will cost ${price} credits`;
}

const China = getShippingCost("China", 100);
const Chile = getShippingCost("Chile", 250);
const Australia = getShippingCost("Australia", 170);
const Jamaica = getShippingCost("Jamaica", 120);
const Sweden = getShippingCost("Sweden");

console.log(China);
console.log(Chile);
console.log(Australia);
console.log(Jamaica);
console.log(Sweden);
