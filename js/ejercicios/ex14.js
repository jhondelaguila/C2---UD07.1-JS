// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array.
const get_values = require('./ex13');

let recetas = [
    {
        "nombre": "Paella",
        "tiempo_preparacion": 100,
        "ingredientes": ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "costias", "lo que quieras"]
    },{
        "nombre": "Paella de Marisco",
        "tiempo_preparacion": 120,
        "ingredientes": ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "maricos"]
    },{
        "nombre": "Paella Valenciana",
        "tiempo_preparacion": 110,
        "ingredientes": ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "pollo", "conejo"]
    }
]

recetas.forEach(receta => {
    get_values(receta);
});