// 43#..Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names and one array with the Great added 
// to each magician’s name.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    // Create a copy of the original array using slice()
    let updatedMagicians = magicians.slice();

    // Modify the copied array to add " the Great" to each magician's name
    updatedMagicians = updatedMagicians.map(magician => magician + " the Great");

    // Return the updated array
    return updatedMagicians;
}

// Original array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Create a new array with "the Great" added to each magician's name
let greatMagicians = make_great(magicians.slice());

// Show the original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);

// Show the modified magicians' names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

