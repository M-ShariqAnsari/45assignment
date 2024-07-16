
//16.. More Guests: You just found a bigger dinner table, so now more space is available. Think of
// three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let Name_list : string[] = [ "Ali Hasan" , "Azan" , "Shahzaib"];
console.log(Name_list[2] + " can't come to dinner, so I'm updating the guest list.");
// updating Name list
 Name_list.pop();
 Name_list.push("Shariq");
 Name_list.unshift("Sohail")
Name_list.splice(2, 0, "waqas")
 Name_list.push("Danish");
for (let i = 0 ; i<Name_list.length ; i++)
    {
        console.log(`Dear ${Name_list[i]}:\n You are invited to tonight's dinner party. `);
        
    }
 