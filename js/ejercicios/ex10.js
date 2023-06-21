// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.

let persona_a = {
    "nombre": "Jhon",
    "apellidos": "del Aguila",
    "edad": 30,
    "dirección": "Calle Sevilla",
    "ciudad": "Tarragona", 
    "país": "España"
}

const nombre_completo = (persona) => {
    console.log(`${persona.nombre} ${persona.apellidos}`);
};

nombre_completo(persona_a);