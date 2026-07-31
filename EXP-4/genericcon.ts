// Generic Class (Generic Variable)

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Stored Value: " + this.value);
    }
}

// Generic Function

function printData<T>(data: T): void {
    console.log("Data: " + data);
}

// Generic Constraint

interface Person {
    name: string;
}

function displayPerson<T extends Person>(person: T): void {
    console.log("Person Name: " + person.name);
}

// Main Program

let numberBox = new Box<number>(100);
numberBox.display();

let stringBox = new Box<string>("Pallavi");
stringBox.display();

printData<number>(25);
printData<string>("TypeScript");
printData<boolean>(true);

displayPerson({ name: "Pallavi" });
displayPerson({ name: "Akash" });