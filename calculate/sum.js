// Bydefault method and variable are  protected from leaking 

console.log("Log by sum.js")
const calculateSum = (a,b)=> a+b;
const x = 100;

// module.exports = {x : x , calculateSum : calculateSum}
console.log(module.exports); // this prints an empty object
// so :- we can also do it like this
// module.exports.x = x
// module.exports.calculateSum = calculateSum;  assigning value on key of an empty object
module.exports = {calculateSum}; 