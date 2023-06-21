// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos
//     tres) y distintos valores. Crea una función que saque por consola el valor de una de las
//     propiedades para todos los objetos.

let personas = [
    {
        "nombre": "Jhon",
        "apellido": "del Aguila",
        "edad": 30,
        "dirección": "Calle Sevilla",
        "ciudad": "Tarragona", 
        "país": "España"
    },{
        "nombre": "Junior",
        "apellido": "Pinedo",
        "edad": 23,
        "dirección": "Calle Huelva",
        "ciudad": "Barcelona", 
        "país": "España"
    },{
        "nombre": "Samuel",
        "apellido": "Eto'o",
        "edad": 31,
        "dirección": "Calle Madrid",
        "ciudad": "Sevilla", 
        "país": "España"
    }
];

const get_values_by_key = (array,key) => {
    array.forEach(object => {
        console.log(object[key]);
      });
};

get_values(personas,"edad");