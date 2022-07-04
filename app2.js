
let producto = parseInt(prompt (`Ingrese número del producto que desea comprar:
1- remera
2- pantalón
3- camisa
4- gorro`))
let precio = parseInt(prompt("Ingrese el precio de su producto"))
let metodoP = parseInt(prompt(`¿Que metodo de pago prefiere? 
1- cuotas
2- al contado`))
if (metodoP === 2) {
    alert("Su total a pagar es:"+precio)
}
else if(metodoP === 1){
    alert("Intereses por cuotas 3 y 6: 25% / 9 y 12: 40%")
    cuotas = parseInt(prompt("Ingrese cantidad de cuotas"))
    precio = pagoC(precio,cuotas);
    alert("Su total a pagar es de: "+cuotas+ " " + "cuotas de $" + (precio/cuotas));

}
else{
    alert("No ha podido realizar su compra");
}




function pagoC(precio,cuotas){
    switch (cuotas) {
        case 3: case 6:
            precio = precio * 1.25;
            break;
        case 9: case 12:
            precio= precio * 1.4;
            break;       
        default:alert("error en la cantidad de cuotas")
            break;
    }
    return precio;
}