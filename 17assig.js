// Seventeenth assigment
// continue from 16
let Name_list = ["Ali Hasan", "Azan", "Shahzaib"];
console.log(Name_list[2] + " can't come to dinner, so I'm updating the guest list.");
// updating Name list
Name_list.pop();
Name_list.push("Shariq");
Name_list.unshift("Sohail");
Name_list.splice(2, 0, "waqas");
Name_list.push("Danish");
console.log(Name_list);
console.log("I just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests, So.");
Name_list.pop();
console.log("sorry Danish I can’t invite them to dinner.");
Name_list.pop();
console.log("sorry Shariq I can’t invite them to dinner.");
Name_list.pop();
console.log("sorry Azan I can’t invite them to dinner.");
Name_list.pop();
console.log("sorry Waqas I can’t invite them to dinner.");
for (let i = 0; i < Name_list.length; i++) {
    console.log(`Dear ${Name_list[i]}:\n You are still invited to tonight's dinner party. `);
}
//  empty list
Name_list.pop();
Name_list.pop();
console.log(Name_list);
export {};
