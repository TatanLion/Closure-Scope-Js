var firstName; //Undefinied
firstName = 'Jonathan';
console.log(firstName);

var lastName = 'Amaya'; //Declarar - Asignar
lastName = 'Mendieta' // Reasignar
console.log(lastName);

//** LET **//
let fruit = 'Apple';
fruit = 'Kiwi';
//No podemos redeclarar esta variabe puesto que estamos rompiendo el tema del block scope de la variable LET

//** CONST **//
const animal = 'dog';
animal = 'cat'; //Aqui tampoco podemos reasignar la variable puesto que es una constante y su volar debe de ser constante.

const vehicles = [];
vehicles.push("Carro");
console.log(vehicles);

vehicles.pop();
console.log(vehicles)

