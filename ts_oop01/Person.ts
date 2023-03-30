export class Person {
    private firstName: String
    private lastName: String
    constructor(firstName: String, lastName: String) {
        this.firstName = firstName
        this.lastName = lastName
    }
    public printName(): string {
        return `firstName: ${this.firstName} lastName: ${this.lastName}`
    }
}

// const person1 = new Person("Hoang", "Nhat");
// person1.printName()

