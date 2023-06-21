// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.

const myArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const array_lenght = (array) => console.log(array.length);

array_lenght(myArray);

const random_elem = (array) => console.log(array[Math.floor(Math.random()*array.length)]);

random_elem(myArray);