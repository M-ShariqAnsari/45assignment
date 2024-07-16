//24#..More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False
//  result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater
//  than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Tests for equality and inequality with strings
let str1 = " Shariq";
let str2 = " ansari";
console.log("\tequality and inequality with strings\t");
console.log(str1.length === str2.length);
console.log(str1 == str2);
//• Tests using the lower case function
console.log("\tusing the lower case function");
console.log(str2.toLowerCase() !== "shariq");
console.log(str1.toLowerCase() == "ansari");
// Numerical tests 
console.log("\t  Numerical tests ");
let a = 2;
let b = 4;
//equality and inequality
console.log(a == b);
console.log(a !== b);
//greater than and less than
console.log(a > b);
console.log(a < b);
//greater than or equal to,
console.log(a >= b);
//less than or equal to
console.log(a <= b);
//Tests using "and" and "or" operators
console.log("\tTests using 'and' and 'or' operators");
console.log((a < b) || (b !== a));
console.log((a > b) && (b > a));
console.log("\t Testing array");
let arr = [1, 2, 3, 4, 5];
//Test whether an item is in a array
console.log(arr[1] == 1);
//Test whether an item is not in a array
console.log(arr.length == arr[4]);
export {};
