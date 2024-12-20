console.log("funciona esta accion")



/*let nombreUsuario = document.getElementById("nombre");
let guardar = document.getElementById("botonGuardar");
function usuario(){

   
    alert(nombreUsuario.value);
    console.log(nombreUsuario.value);
    let uss = nombreUsuario.value
    localStorage.setItem("datoUsuario", uss)


}

guardar.addEventListener("click", function(){
    
    usuario()
})*/

let nombreUsuario = document.getElementById("nombre")
let apellidoUsuario = document.getElementById("apellido")
let telefonoUsuario = document.getElementById("telefono")
let emailUsuario = document.getElementById("email")
let contraseñaUsuario = document.getElementById("contraseña")


let guardar = document.getElementById("botonGuardar");
function usuario(){

   
    alert("hola " + nombreUsuario.value + " " + apellidoUsuario.value + " verifica que tus datos esten bien. Telefono: " + telefonoUsuario.value + " Email: " + emailUsuario.value + " contraseña " + contraseñaUsuario.value);
    console.log(nombreUsuario.value);

    let uss = nombreUsuario.value
    let apellidoUss = apellidoUsuario.value
    let telfonoUss = telefonoUsuario.value
    let emailUss = emailUsuario.value
    let passUss = contraseñaUsuario.value

    localStorage.setItem("datoUsuario", uss)
    localStorage.setItem("apellidoUsuarioKey", apellidoUss)
    localStorage.setItem("telefonoUsuarioKey", telfonoUss)
    localStorage.setItem("emailUsuarioKey", emailUss)
    localStorage.setItem("contraseñaUsuarioKey", passUss)


}

guardar.addEventListener("click", function(){
    
    usuario()
})




