/* let edad = 20
if(edad < 15){
    console.log("necesitas un adulto")
}else if(edad > 18){
    console.log("entras con un amigo")
}else{
    console.log("no puedes entrar")
}

let usuario = prompt("ingrresa un usuario").toLowerCase();

while (usuario != "andres") {
    alert("usuario incorrecto")

    usuario = prompt("ingrese un usuario");

    
}
alert("bienvenido"); */
/* et puto = "hola"

switch (puto) {
    case "bruno":
        console.log("sos trolaso")
        
        break;

    default:
        console.log("sos crack")
        break;
}

 */


// function eventosDiario(diario){
//     let eventos = [];

//     for (let entrada of diario){

//         for ( let evento of entrada.eventos){
//             if (!eventos.includes(evento)){
//                 evento.push(evento);
//             }
//         }
//     }
// return eventos;
// }
// console.log(eventosDiario(DIARIO));

/* let listaDeTareas = [];
function recordar(tarea) {
    listaDeTareas.push(tarea);
}
function obtenerTarea(){
    return listaDeTareas.shift();   
}
function recordarUrgentemente(tarea) {
    listaDeTareas.unshift(tarea);
} */
/* function remover(array, indice) {
    return array.slice(0, indice)
    .concat(array.slice(indice +1));
    
}
console.log(remover(["a", "b", "c", "d","e"], 2))
*/

/* let numeros = [5, 1, 7];
console.log(Math.max(numeros)); */

/* function nombreDeFuncion(parametro) {
    
}
nombreDeFuncion(argumento) */




/* function suma(numeroUno,numeroDos){
    return numeroUno + numeroDos
}

let resultado = suma(5,5)

console.log(resultado) */

/* const sumar = function(a,b){
    return a + b
}

console.log(sumar(5,5)) */


                                                 /* FUNCIONES Flecha */

/* const multiplicacion = (a,b) => {return a * b}
console.log(multiplicacion(5,5)) */


/* const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21;

let precio = Number(prompt("dime el precio de tu producto "));
let descuento = 50;
let nuevoPrecio = resta(suma(precio,iva(precio)), descuento);
console.log(nuevoPrecio); */

/* const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;
let precioProducto  = 500; 
let descuento = 50;  
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento ); 
console.log(nuevoPrecio); */
let string = JSON.stringify({ardilla: false,
                            eventos: ["fin de semana"]});
    console.log(string);

    // → {"ardilla":false,"eventos":["fin de semana"]}
    
    console.log(JSON.parse(string).eventos);

    // → ["fin de semana"]