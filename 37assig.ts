// 37#..Large Shirts: Modify the make_shirt() function so that shirts are large by
// default with a message that reads I love TypeScript. Make a large shirt and a 
// medium shirt with the default message, and a shirt of any size with a different message.


class TShirt {
    size: string;
    message: string;

    constructor(size: string = "Large", message: string = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }

    printSummary(): void {
        console.log(`The shirt size is ${this.size} and it will have the message: '${this.message}' printed on it.`);
    }
}

// Function to create and print a shirt
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    const shirt = new TShirt(size, message);
    shirt.printSummary();
}

// Create a large shirt with default message
make_shirt();

// Create a medium shirt with default message
make_shirt("Medium");

// Create a custom-sized shirt with a different message
make_shirt("Small", "Hello, World!");
