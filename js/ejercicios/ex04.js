// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let word = "Hola";
console.log(word);
let array = [];

for (const letter of word) {
    array.push(letter);
}
console.log(array);

array.reverse();
console.log(array);
console.log(array.join(""));