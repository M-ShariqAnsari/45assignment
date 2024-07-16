
// 15..Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to
// invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let Name_list : string[] = [ "Ali Hasan" , "Azan" , "Shahzaib"];
// updating Name list
Name_list.pop();
Name_list.push("Shariq");

for (let i = 0 ; i<Name_list.length ; i++)
    {
        console.log(`Dear ${Name_list[i]} \n You are invited to tonight's dinner party `);
        
    }
