//18#..Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
// has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
let myFavoritPlace = ["Victoria Falls", "Grand Canyon", "Anse Source d'Argen", "Cirque de Gavarnie", "Lofoten Islands"];
//Print your array in its original order.
console.log(" original order\n" + myFavoritPlace);
// Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order\n" + [...myFavoritPlace].sort());
// Show that your array is still in its original order by printing it.
console.log(" original order\n" + myFavoritPlace);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical orde\n" + [...myFavoritPlace].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log(" original order\n" + myFavoritPlace);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order\n" + myFavoritPlace.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order of list again\n" + myFavoritPlace.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("alphabetical order\n" + myFavoritPlace.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sort and in reverse alphabatical order\n" + myFavoritPlace.sort().reverse());
export {};
