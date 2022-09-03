function matchHouse(n){
let roof = n*2;
let walls = n+1;
let floor = n;
let ceiling = n;

return roof + walls + floor + ceiling;
}

const prompt = require('prompt-sync')();

let steps = prompt("Enter number of steps ");
console.log("The number of steps are")
console.log(matchHouse(parseInt(steps)));