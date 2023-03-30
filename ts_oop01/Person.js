"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.printName = function () {
        return "firstName: ".concat(this.firstName, " lastName: ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
// const person1 = new Person("Hoang", "Nhat");
// person1.printName()
