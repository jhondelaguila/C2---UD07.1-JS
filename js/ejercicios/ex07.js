// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

let a = [1,2,3,4,5,6,7,8,9,10];

const greater_than_5 = (array) => console.log(array.filter((value) => value > 5));

greater_than_5(a);