// 45#..Cars: Write a function that stores information about a car in a Object. The function should
// always receive a manufacturer and a model name. It should then accept an arbitrary number of
// keyword arguments. Call the function with the required information and two other name-value
// pairs, such as a color or an optional feature. Print the Object that’s returned to make sure
// all the information was stored correctly
function createCar(manufacturer, model, options = {}) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...options // Spread operator to include any additional options
    };
    return car;
}
// Call the function with required information and additional properties
let myCar = createCar("Toyota", "Camry", { color: "Blue", sunroof: true });
// Print the object returned by the function
console.log(myCar);
export {};
