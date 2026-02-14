require('./xyz')  // after this it prints the cl 

// directly access from the calculate package / folder
const {multiply , calculateSum } = require('./calculate')



  // prints console but can't have access to the methods and variables

// To access the method and variable
// const {calculateSum } =  require('./calculate/sum')  // direct destruturing



// console.log(globalThis)
const a = 10;
const b = 5;
const x = 200 // doesn't has anything to do with the sum.js 
console.log("Sum is  - ",calculateSum(a,b) );
console.log("Multiply is  - ",multiply(a,b) );


// console.log(globalThis === global) // true b/c globalThis and global -> points to the same object


