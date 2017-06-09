// function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1989,
    job: 'programmer'
};

var Person = function(name, yearOfbirth, job){
        this.name = name;
        this.yearOfBirth = yearOfbirth;
        this.job = job;
};

Person.prototype.calculateAge = function(){
            console.log(2017 - this.yearOfBirth);
        };

Person.prototype.lastName = 'Smith';

var denis = new Person('Denisas', 1989, 'teacher');
var auste = new Person('Auste', 1991, 'dentist');
var domas = new Person('Dominykas', 2006, 'student');
*/ 

// Object.create

/*
var personProto = {
    calculateAge: function(){
        console.log(2017 - this.yearOfbirth);
    }
};

var denis = Object.create(personProto);
denis.name = 'denis';
denis.yearOfbirth = 1989;
denis.job = 'programmer';

var auste = Object.create(personProto, {
    name: { value: 'Auste'},
    yearOfbirth: {value: 1991},
    job: {value: 'dentist'}
});
*/

// Primitives vs objects
//Primitives
/*
var a = 23;
var b = a;

a = 46;
b;
console.log(a);
console.info(b);

// objects
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;

obj1.age = 27;

console.log(obj1);
console.log(obj2);

// Functions

var age = 27;
var obj = {
    name: 'denis',
    city: 'vilnius'
};

function change(a, b){
    a = 30;
    b.city = 'california';
}
change(age, obj);
console.log(age);
console.log(obj.city);
*/


// Passing functions as arguments

/*
var years = [1991, 1989, 1966, 1941, 2006];

function arrayCalc(arr, fn){
    var arrResult = [];

    for(var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el){
    return 2017 - el;
}


function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){

    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else {
        return -1;
    }
    
}


var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var heartrate = arrayCalc(ages, maxHeartRate);
console.log(fullAges);
console.log(heartrate);


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        };
    }else if ( job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        };
    }else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

designerQuestion('Auste');
teacherQuestion('Denis');


// IIFE imediatly invoked functions



(function(){
        var score = Math.random() * 10;
    console.log(score >= 5);
})();



(function(goodLuck){
        var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);



// Closures

function retirement(retirementAge){
    var a = ' years left until retirement.';
   return function (yearOfbirth){
        var age = 2017 - yearOfbirth;
        if(retirementAge < 0 ){
             console.log('You already retired!');
           
        }else {
            console.log((retirementAge - age) + a)
        }
        
    };
}

// var retirementUS = retirement(66);

// retirementUS(1989);

retirement(66)(1991);

var lithuania = retirement(63);
var germany = retirement(65);
var iceland = retirement(67);

lithuania(1989);
germany(1941);
iceland(1991);



function interviewQuestion(job){
    
    return function(name){
        if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else if (job === 'dentist'){
                console.log('how many teeth do you have?');
        }else{
            console.log('what are you doing?');
        }
    };
}

interviewQuestion('dentist')('auste');


var denis = {
    name: 'denis',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('good ' + timeOfDay + ', ladies and gentlement I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m '+ this.age + ' old.');
        } else if ( style === 'friendly'){
            console.log('Hey what\'s up I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m '+ this.age + ' old. Have a nice '+ timeOfDay);
        }
    }
};
denis.presentation('formal', 'morning');

var auste = {
    name: 'auste',
    age: 26,
    job: 'dentist'
};

denis.presentation.call(auste, 'friendly', 'afternoon');

denis.presentation.apply(auste, ['friendly', 'afternoon']);

var denisFriendly = denis.presentation.bind(denis, 'friendly');

denisFriendly('afternoon');
denisFriendly('night');

var austeFormal =  denis.presentation.bind(auste, 'formal');
austeFormal('afternoon');
*/