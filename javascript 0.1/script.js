
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