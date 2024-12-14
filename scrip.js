console.log("Prueba de conexion")
/*console.log(document.getElementById("contador")) //DEVUELVE EL OBJETO
console.log(document.getElementById("contador").textContent)// DEVUELVE EL ATRIBUTO
console.log(document.getElementById("contador").textContent = "558")// DEVUELVE EL VALOR */

var validadorLike = false;
var contadorMeGusta = 0;
function contador(){
    console.log("Esta funcion funciona")

   console.log(document.getElementById("contador"))
   var contador =document.getElementById("contador");
   
    if(validadorLike){
 
        validadorLike = false;
        contadorMeGusta = contadorMeGusta - 1;
              
        
        contador.textContent = contadorMeGusta
        console.log("Validador verdadero y el valor del contador es " + contadorMeGusta)
        
    } else{
        validadorLike = true;
        
        contadorMeGusta ++;
        contador.textContent = contadorMeGusta
        console.log("Validador falso y el valor del contador es " + contadorMeGusta)
    }


}

document.getElementById("count").onclick = function (){
    contador();
}