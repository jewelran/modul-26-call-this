
// es6 used right now.............
class person {
    constructor(firstName , lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPersone = new person("jewel","rana",23000);
console.log(heroPersone);
const friendlyPerson = new  person("jamal","uddin",3233)
console.log(friendlyPerson)
// before  es6 used............
// same function....2nd wey.............
function person1(firstNum,lastNum,salary){
    this.firstNum = firstNum;
    this.lastNum = lastNum;
    this.salary = salary;
}
const oldPerson = new person ("tuhin" , "pagla", 32424);
console.log(oldPerson);






