var palabra = prompt ("Introduce la palabra");
var contador = 0;
var nElementos = palabra.length;
var oportunidad = 2;
var status = 0;
// -- SOLDADO
while (oportunidad >=0 && contador <nElementos) {
    var letra = promp ("Introduce una letra");
    if (palabra[contador] == letra) {
        console.log ("La letra es igual");
        contador ++;
    }else{
        if(oportunidad ==0){
            console.log("Perdiste");
            estatus = 1;
            break;
        }else{
            console.log("La letra no es igual");
            oportunidad --;
        }   
    }  
}
console.log(estatus);
if(estatus == 0){
    console.log("Ganaste");
}else{
    console.log("Perdiste");
}
