// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.
const get_values = require('./ex13');

class Receta {
    constructor(nombre, tiempo_preparacion, ingredientes) {
      this.nombre = nombre;
      this.tiempo_preparacion = tiempo_preparacion;
      this.ingredientes = ingredientes;
    }
}

const receta1 = new Receta("Paella", 100, ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "costias", "lo que quieras"]);
const receta2 = new Receta("Paella de Marisco", 120, ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "maricos"]);
const receta3 = new Receta("Paella Valenciana", 110, ["Arroz", "agua", "aceite de oliva", "sal", "azafrán", "tomate", "judía verde plana", "garrofón", "pollo", "conejo"]);

const recetas = [receta1, receta2, receta3];

recetas.forEach(receta => {
    get_values(receta);
});