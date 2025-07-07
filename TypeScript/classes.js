var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name, " and I'm ").concat(this.age));
    };
    return Person;
}());
var vali = new Person("Vali", 23);
vali.greet();
