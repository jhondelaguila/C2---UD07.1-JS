// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes

let receta = {
    "nombre": "Paella Valenciana",
    "tiempo_preparacion": 120,
    "ingredientes": ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "pollo", "conejo"]
};

const get_values = (object) => {
    console.log(object.nombre);
    console.log(object.tiempo_preparacion);
    object.ingredientes.forEach(element => {
        console.log(element);
    });
};

get_values(receta);

module.exports = get_values;
