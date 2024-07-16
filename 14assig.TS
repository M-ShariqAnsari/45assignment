
// 14#..Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.



let Name_list : string[] = [ "Ali Hasan" , "Azan" , "Shahzaib"];
for ( let i = 0 ; i<Name_list.length ; i++)
    {
        console.log(`Dear ${Name_list[i]} You are invited to tonight's dinner party` );
        
    }