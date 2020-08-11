// call apply...........
const normalPerson = {
    firstName : 'jewel',
    lastName : 'rana',
    salary :12000,
  /* anonimus function*/  getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    getSalary : function(amount){
        console.log(this)
        this.salary  = this.salary - amount;
        return this.salary;
    }

 }
// normalPerson.getSalary(450);
// normalPerson.getSalary(1450);
// console.log(normalPerson.salary)
// end of call apply................
// practice............file
// const person = {
//     name :"jewel",
//     title :"rana",
//     hobby  :"play football",
//     taka :19045,
//     getPlay :function(){
//         console.log(this.name,  this.title, this.hobby);

//     },
//     toatlTaka :function(amount){
//         this.taka = this.taka - amount;
//         return this.taka;
//     }
// }
// person.toatlTaka(5500);
// console.log(person.taka)
// end of practice file....................

const heroPerson = {
    firstName : "hiro",
    lastName : "alam",
    salary : 20000,

}
const friendlyPerson = {
    firstName : "rohim",
    lastName : "uddin",
    salary : 25000,
    
}

// bind function..............................
// normalPerson.getSalary();
// const heroGetBIll = normalPerson.getSalary.bind(heroPerson);
// heroGetBIll(3000)
// heroGetBIll(2000)
// heroGetBIll(2000)
// const friendlyPersons = normalPerson.getSalary.bind(friendlyPerson);
// friendlyPersons (2000),
// friendlyPersons (2000)


// call function...............................
// normalPerson.getSalary.call(heroPerson, 3000);
// console.log(heroPerson.salary)
// normalPerson.getSalary.call(friendlyPerson, 3000);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary)

// apply function .........................


