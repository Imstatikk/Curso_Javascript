
// let producto = parseInt(prompt(`Ingrese número del producto que desea comprar:
//  1- remera
//  2- pantalón
//  3- camisa
//  4- gorro`))
// let precio = parseInt(prompt("Ingrese el precio de su producto"))
// let metodoP = parseInt(prompt(`¿Que metodo de pago prefiere? 
//  1- cuotas
//  2- al contado`))

// while (metodoP !== 1) {
//     alert("No ingresaste opción válida")
//     metodoP = parseInt(prompt(`¿Que metodo de pago prefiere? 
//  1- cuotas
//  2- al contado`))
 

// }
// if (metodoP === 2) {
//     alert("Su total a pagar es: $" + precio)
// }
// else if (metodoP === 1) {
//     alert("Intereses por cuotas 3 y 6: 25% / 9 y 12: 40%")
//     cuotas = parseInt(prompt("Ingrese cantidad de cuotas"))
//     precio = pagoC(precio, cuotas);
//     alert(`Su producto es ${producto} con un precio de ${precio}, pulse aceptar para seguir con la operación`)
//     alert("Su total a pagar es de: " + cuotas + " " + "cuotas de $" + (precio / cuotas));}

// else {
//     alert("No ha podido realizar su compra");
// }





// function pagoC(precio, cuotas) {
//     switch (cuotas) {
//         case 3: case 6:
//             precio = precio * 1.25;
//             break;
//         case 9: case 12:
//             precio = precio * 1.4;
//             break;
//         default: alert("error en la cantidad de cuotas")
//             break;
//     }
//     return precio;
// }
 let food =prompt(`que comida desea comprar 
 1- hamburguesa
 2- pizza
 3- ensalada `)
 switch (food) {
    case "hamburguesa":
        alert ("el precio de su producto es de $1050")
        break;
    case "pizza":
        alert("el precio de su producto es de $900")
        break;
    case "ensalada":
        alert("el precio de su producto es de $600") 
        break;

 
    default: alert("no ingresaste comida")
        break;
 }
