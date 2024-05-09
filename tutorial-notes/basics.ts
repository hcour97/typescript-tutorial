let color = "purple";

console.log("hello from typescript.")


function multiply(x: number, y: number) : number {
    return x * y;
}

multiply(4,5);

class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark(): string {
        return "WOOF!";
    }

    eat(food: string) : void {
        console.log(`${this.name} eats ${food}`);
    }
}

const elton = new Dog("Elton", 0.5);
elton.bark();
elton.eat("chicken");

// OBJECTS
let currentUser: { username: string; age: number } = {
    username: "user1",
    age: 20,
}

// interfaces help label object type to minimize repetitive code
interface User {
    username: string,
    age?: number,
}

const admin: User = {
    username: "admin1",
    age: 18,
}

function printUsername( user: {username : string; age: number}) {
    console.log(user.username);
}
function printUsernameFromInterface( user: User) : void {
    console.log(user.username);
}