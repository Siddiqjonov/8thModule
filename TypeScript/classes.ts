class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void{
        console.log(`Hi, I am ${this.name} and I'm ${this.age}`)
    }
}

let vali = new Person("Vali", 23);
vali.greet();
