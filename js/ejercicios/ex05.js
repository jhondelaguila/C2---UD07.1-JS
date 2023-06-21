// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2,
// 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const join_arrays = (a,b) => {
    let newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray[i+i] = a[i];
        newArray[i+i+1] = b[i];
    }
    console.log(newArray);
};

join_arrays(arrayUno,arrayDos);