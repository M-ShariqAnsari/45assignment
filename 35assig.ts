// 35#..Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name
// of each animal. • Modify your program to print a statement about each animal, such as
// A dog would make a great pet. • Add a line at the end of your program stating what these 
// animals have in common. You could print a sentence such as Any of these animals would make 
// a great pet!


let Animal_Name:string[]=["Parrot","Dog", "Cat"]
for(let i = 0; i<Animal_Name.length; i++ )
{
//     if(Animal_Name[i] === "Dog"){
//         console.log("Dog: Loyal and friendly, dogs are often referred to as man's best friend.");
//     }
//     else if (Animal_Name[i] === "Cat")
//     {
//         console.log("Cat: Independent yet affectionate, cats are popular for their playful and comforting nature.");
//     }
//     else{
//         console.log("Parrot: Colorful and intelligent, parrots are known for their ability to mimic sounds and words.");
        
//     }
console.log( `\n${Animal_Name[i]} \n \twould make a great pet.`);
}
console.log("-:Any of these animal would make a great pet!:-");
