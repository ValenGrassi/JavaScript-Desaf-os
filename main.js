let cantidad = prompt("Ingrese la cantidad de veces que quiere repetir la palabra hola: ")

if(cantidad==1){
console.log("Hola 1 vez")
}else if(!isNaN(cantidad) && cantidad != null && cantidad != "" && cantidad < 10000){
    for(let i = cantidad ; i > 1; i--){
    console.log("Hola", i + " veces");
    }
    for(let i = 1; i>0; i--){
    console.log("Hola", i + " vez");
    }
}else if (cantidad > 10000){
    alert("Es muy grande! Recargá la página y poné un número mas chico!")
}else{
    alert("No es un número! Reiniciá la página y poné un numero")
}