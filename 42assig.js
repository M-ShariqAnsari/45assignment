// 42#..Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    // Map each magician's name to include "the Great"
    return magicians.map(magician => magician + " the Great");
}
// Array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Add "the Great" to each magician's name
magicians = make_great(magicians);
// Call the function to show the magicians
show_magicians(magicians);
export {};
