
/*
var age = 31;

if ( age < 20){
    console.log('you are teenager!');
}   else if (age > 20 && age < 30)  {
    console.log('you are young man!');
} else {
    console.log('you are a man');
}


var job = "teacher";
job = prompt('Koks tavo darbas?');

switch (job){
    case 'teacher':
        console.log('Denisas -' + ' ' + job);
        break;
    case 'driver':
        console.log('Denisas -' + ' ' + job);
        break;
    case 'cop':
        console.log('Denisas -' + ' ' + job);
        break;
    default: 
        console.log('Denisas yra kazkas kitas');
}
*/
/*
var friend1 = {
    height: 185,
    age: 25,
};
var friend2 = {
    height: 195,
    age: 23,
};
var friend3 = {
    height: 190,
    age: 24,
};
var friend1Score = friend1.height + friend1.age * 5;
var friend2Score = friend2.height + friend2.age * 5;
var friend3Score = friend3.height + friend3.age * 5;

console.log(friend1Score);
console.log(friend2Score);
console.log(friend3Score);

if(friend1Score > friend2Score && friend1Score > friend3Score){
    console.log('friend1 wins');
} else if ( friend1Score < friend2Score){
    console.log('friend 2 wins game');
}else {
    console.log('lygiosios');
}



if ( friend1Score > friend2Score && friend1Score > friend3Score){
    console.log('Friend1 wins game with a score : ' + friend1Score);
}
 else if( friend2Score > friend1Score && friend2Score > friend3Score) {
    console.log('Friend2 wins game with a score : ' + friend2Score);
} else if (friend3Score > friend1Score && friend3Score > friend2Score){
    console.log('Friend3 wins a game with a score '+ friend3Score);
} else {
    console.log('lygiosios');
}
*/
// functions   
/*
function calculateAge(yearOfbirth){
    var age = 2017 - yearOfbirth;
    return age;
}
var ageJohn = calculateAge(1989);
var ageMike = calculateAge(1966);
var ageMary = calculateAge(1941);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilretirement(name, year){
        var age = calculateAge(year);
        var retirement = 65 - age;
        if (retirement >= 0){
 console.log( name + ' retires in ' + retirement + ' years.');
        }else {
            console.log(name + ' has already reitred.');
        }
       
}

yearsUntilretirement('John', 1989);
yearsUntilretirement('mike', 1966);
yearsUntilretirement('mary', 1941);
*/

// ARRAYS 
/*
var names = [ 'Denis', 'Auste', 'Bartas'];
var years = new Array(1989, 1991, 1992);


names[3] = 'Vytas';

console.log(years);
console.log(names);

var denis = ['Denis', 'Jersovas', 1989, 'Developer', false];

denis.push('green'); // add to the end of the array
denis.unshift('Mr.'); // add to the begining of array
denis.pop(); // removes last item from array
denis.shift(); // removes from the begining of the array

console.log(denis);

alert (denis.indexOf('Jersovas')); // shows the position of element in the array starts from 0++ 
if (denis.indexOf('Developer') === -1){
    console.log('Denisas is not a developer');
} else {
    console.log('Denis is a developer');
}
*/

// Objects
/*
var auste = {
    name: 'Auste',
    lastName: 'Sarpaliute',
    yearOfbirth: 1991,
    job: 'Dentist',
    isMarried: false,
    family: ['Denisas', 'Domas', 'Daina', 'Rytis'],
    calculateAge: function(yearOfbirth){
        return 2016 - yearOfbirth;
    }
};


console.log(auste);
console.log(auste.lastName);
console.log(auste['job']);

var xyz = 'job';
console.log(auste[xyz]);
auste.lastName = 'Jersova - Sarpaliute';
auste['job'] = 'Programmer';

console.log(auste);

var denis = new Object();
 denis.name = 'Denis';
 denis.lastName = 'Jersovas';
 denis['yearOfBirth'] = 1989;
 denis['job'] = 'Developer';
 denis.isMarried = false;

 console.log(denis);
*/
// v1.0
/*
var auste = {
    name: 'Auste',
    lastName: 'Sarpaliute',
    yearOfbirth: 1989,
    job: 'Dentist',
    isMarried: false,
    family: ['Denisas', 'Domas', 'Daina', 'Rytis'],
    calculateAge: function(){
        return 2017 - this.yearOfbirth;
    }
};
console.log(auste.calculateAge());

var age = auste.calculateAge();
auste.age = age;
console.log(auste);

*/
// v2.0
/*
var auste = {
    name: 'Auste',
    lastName: 'Sarpaliute',
    yearOfbirth: 1989,
    job: 'Dentist',
    isMarried: false,
    family: ['Denisas', 'Domas', 'Daina', 'Rytis'],
    calculateAge: function(){
        this.age = 2017 - this.yearOfbirth; // constantly adds result to object
    }
};
auste.calculateAge();

console.log(auste);

var denis = {
   
    yearOfbirth: 1941,
 

    calculateAge: function(){
        this.age = 2017 - this.yearOfbirth; // constantly adds result to object
    }
};
denis.calculateAge();

console.log(denis);

var bartas = new Object();
bartas.name = 'Bartas';
bartas.lastName = 'Stankevic';
bartas.yearOfBirt = 1991;
bartas.isMarried = true;
bartas.family = ['Katazina', 'Mama', 'Tetis', 'Domas'];

bartas.calculateAge = function(){
    this.age = 2017 - this.yearOfBirt;
};
bartas.calculateAge();
console.log(bartas);


var denisas = {
    name: 'Denisas',
    lastName: 'Jersovas',
    gimimoMetai: 1989,
    isMarried: false,
    family: ['Auste', 'Mociute', 'Petrone', 'Mama', 'Tetis'],
    job: 'Developer'
};
denisas.kiekMetu = function(){
    this.metai = 2017 - this.gimimoMetai;
}
denisas.kiekMetu();
console.log(denisas);
// Loops 

for ( i = 0; i < denisas.family.length ; i++){
    console.log(denisas.family[i]);
}

for ( i = denisas.family.length - 1; i >= 0; i--){
	console.log(denisas.family[i]);
}
*/
/*
var i = 0;
while (i < denisas.family.length){
    console.log(denisas.family[i]);
    i++;
}
for ( i = 0 ; i <= 5; i++){
    console.log(i);

    if(i === 3){
        break;
    } // breaks loop at then it hits number 3 
}
for (i = 0; i <= 5 ; i++){
    if (i === 3){
        continue;
    } // breake on number 3 and continues from second number
    console.log(i);
}
*/

/*


function printFullAge(years){
        var ages = [];
        var isFullAges = [];

                for ( var i = 0; i  < years.length; i++){
                    ages[i] = 2017 - years[i];
                }
                       


        for ( i = 0; i < ages.length; i++){
            if(ages[i] >= 18){
                console.log('You are full age, your age is ' + ages[i]);
                isFullAges.push(true);
            }else{
                console.log('You are to young, your age is '+ ages[i]);
                isFullAges.push(false);
            }
        }

        return isFullAges;

}
var years = [1941, 1989, 1991, 2006, 1966];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2011, 1940, 1999]);

console.log(full_2);


var as = new Object();

function newAs(name, lastname, birth){
    as.name = name;
    as.lastName = lastname;
    as.birth = birth;
}
newAs('denisas', 'jersovas', 1989);


console.log(as);

var john = 'John';
function first(){
    var a = "hi ";
    second();
    var x = a + john;
    console.log(x);
}
function second(){
    var b = "holla ";
    third();
    var z = b + john;
    console.log(z);
}
function third(){
    var c = 'labas ';
    var g = c + john;
    console.log(g);
}
first();
*/
// HOISTING
/*
calculateAge(1989);
function calculateAge(year){
    console.log(2017 - year);
}

// retirement(1990); hoisting - kilnojimas, neveikia su functions kurios yra var nurodytos
var retirement = function(year){
    console.log(65- (2017- year));
};

console.log(metai);
var metai = 28;

function foo(){
    var metai = 65;
    console.log(metai);
}
foo();
console.log(metai);


var q = 'labas';
first();

function first(){
    var w = 'privet';
    second();

    function second(){
        var c = 'holla';
        console.log(q + w + c);
    }
}


calculateAge(1941);

function calculateAge(year){
function calculateAge(year){
    console.log(2017 - year);
    console.log(this);
}
*/
var bartas = {
    name: 'bartas',
    yearOfBirt: 1991,
    calculateAge: function(){
        console.log(this);
        console.log(2017 - this.yearOfBirt);

        /*
            function innerFunction(){
                console.log(this);
            }
            innerFunction();
        */
    }
};
bartas.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirt: 1945
};
mike.calculateAge = bartas.calculateAge;

mike.calculateAge();