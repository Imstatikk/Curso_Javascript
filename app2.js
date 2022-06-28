
let datos= prompt("Ingrese su Nombre");
let apellido= prompt("Ingrese su apellido")
let dni= prompt("Ingrese su DNI")
let fin=" ";
while (datos !== "Aceptar" &&  datos !== "aceptar") {
fin += datos + " " + apellido + " " + dni;
datos=prompt("Escriba Aceptar para finalizar");
    
}
alert(fin);