// let a = 5;
// console.log(a);
// console.log(global);




// console.log(this); // An empty object 

// i.e the window keyword  is  not equal to global object in node 
//  In console -> this keyword is equal to the window object as well as -> self / frames 

// so to make it global -> globalThis -> supported in all the browser

console.log(globalThis)
console.log(globalThis === global) // true b/c globalThis and global -> points to the same object
