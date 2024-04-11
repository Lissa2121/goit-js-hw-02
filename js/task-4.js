function getShippingCost(country, price) {
    let cost = "";
    switch (country) {
        case "China":
            cost = price;
            break;
        case "Chile":
            cost = price;
            break;
        case "Australia":
            cost = price;
            break;
        case "Jamaica":
            cost = price;
            break;
        default:
            return `Sorry, there is no delivery to your country`;
    }
    return `Shipping to ${country} will cost ${cost} credits`;
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