
// inheretence = paveldejimas function constructor
// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };
// Person.prototype.calculateAge = function(){
//           console.log( 2017 - this.yearOfBirth);
// };
// Person.prototype.lastName = 'Jersovai';
//
//
// var denis = new Person('Denis', 1989, 'developer');
// var auste = new Person('Auste', 1991, 'dentist');
// denis.calculateAge();
// auste.calculateAge();


// Object.create
var Person = function(vardas, gimMetai, darbas){
  this.name = vardas;
  this.yearOfBirth = gimMetai;
  this.job = darbas;
};
var personProto = {
  calculateAge: function(){
    console.log(2017 - this.gimimoMetai);
  }
};


var auste = Object.create(personProto);

var denis = Object.create(personProto, {
    name: {value: 'denis'},
    yearOfBirth: {value: '1989'},
    job: {value: 'developer'}
});
