console.log("funciona esta accion")



let nombreUsuario = document.getElementById("nombre");
let guardar = document.getElementById("botonGuardar");
function usuario(){

   
    alert(nombreUsuario.value);
    console.log(nombreUsuario.value);
    let uss = nombreUsuario.value
    localStorage.setItem("datoUsuario", uss)


}

guardar.addEventListener("click", function(){
    
    usuario()
})

