// Variables

var a; //Declarar variable
var b = 'b'; //Declarar y asignar
b = 'bb'; //Reasginar
var a = 'aa'; //Redeclaración

//Global Scope
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //Se esta declarando de manera global
    console.log(country);
}

countries();
console.log(country);