// 3#..Name Cases: Store a person’s name in a variable, and then print that person’s name
//in lowercase, uppercase, and titlecase.
// // UPER CASE  
let a = "muhammad shariq ansari";
console.log(a.toUpperCase());
// // lower case
let b = "I'M LEARNING TYPESCRIPT";
console.log(b.toLowerCase());
// // Title Case
;
let sentance = "mY nAmE iS mUHammaD SHARIQ aNSARI";
let BreakSentance = sentance.split(" ");
let ConvertInTiTILE = BreakSentance.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let Sentance1 = ConvertInTiTILE.join(" ");
console.log(Sentance1);
export {};
