function checkForSpam(message) {
  const spamKeywords = ["spam", "sale"];
  return spamKeywords.some(keyword => message.includes(keyword));
}

const spring1 = "Latest technology news";
const spring2 = "JavaScript weekly newsletter";
const spring3 = "Get best sale offers now!";
const spring4 = "Amazing SalE, only tonight!";
const spring5 = "Trust me, this is not a spam message";
const spring6 = "Get rid of sPaM emails. Our book in on sale!";
const spring7 = "[SPAM] How to earn fast money?";

const norStr4 = spring4.toLowerCase();
const norStr6 = spring6.toLowerCase();
const norStr7 = spring7.toLowerCase();

console.log(checkForSpam(spring1));
console.log(checkForSpam(spring2)); 
console.log(checkForSpam(spring3)); 
console.log(checkForSpam(norStr4)); 
console.log(checkForSpam(spring5)); 
console.log(checkForSpam(norStr6)); 
console.log(checkForSpam(norStr7)); 
  