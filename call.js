// call apply...........
const normalPerson = {
    firstName : 'jewel',
    lastName : 'rana',
    salary :12000,
  /* anonimus function*/  getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    getSalary : function(amount){
        this.salary  = this.salary - amount;
        return this.salary;
    }

}
normalPerson.getSalary(450);
normalPerson.getSalary(1450);
console.log(normalPerson.salary)
// end of call apply................
// practice............file
const person = {
    name :"jewel",
    title :"rana",
    hobby  :"play football",
    taka :19045,
    getPlay :function(){
        console.log(this.name,  this.title, this.hobby);

    },
    toatlTaka :function(amount){
        this.taka = this.taka - amount;
        return this.taka;
    }
}
person.toatlTaka(5500);
console.log(person.taka)
// end of practice file....................