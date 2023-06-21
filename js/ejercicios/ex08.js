// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún
// elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

const print_same_content = (a,b) => {
    i = 0;
    for (let index = 0; index < a.length; index++) {
        while(i < b.length){
            if(a[index] === b[i]) console.log(a[index]);
            i++;
        }
        i=0;
    }
}

print_same_content(javascript1,javascript2);