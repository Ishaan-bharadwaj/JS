// console.log(2>1);
// console.log(2 >= 1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
the reason is that an equality check == and comparisons ><>=<= work differently.
Comparisons convert null to a number , treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false.
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);

// === (Strict Check)

console.log("2" === 2);  //checks the value as well as the data type