// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades.

let persona_a = {
    "nombre": "Jhon",
    "apellido": "del Aguila",
    "edad": 30,
    "dirección": "Calle Sevilla",
    "ciudad": "Tarragona", 
    "país": "España"
}

const {nombre, apellido, edad} = persona_a;

console.log(nombre);
console.log(apellido);
console.log(edad);