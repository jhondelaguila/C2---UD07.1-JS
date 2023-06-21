// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays:
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

let a = [1,2,3,4,5,6,7,8,9,10];
let odd = [];
let even = [];
const split_array = (array) => {
    for (const i of array) {
        if(i % 2 == 0) even.push(i);
        else odd.push(i);
    }
};

split_array(a)
console.log(odd.concat(even));