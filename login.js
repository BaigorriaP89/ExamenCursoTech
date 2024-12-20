let emailkey = localStorage.getItem("emailUsuarioKey")

let passkey =  localStorage.getItem("contraseñaUsuarioKey")

let loginEmail = document.getElementById("abc")

let password = document.getElementById("password")


console.log(emailkey)
console.log(passkey)
console.log(loginEmail.value)
console.log(password.value)

function validacion(){
    if(loginEmail.value ==  emailkey && password.value == passkey ){
        alert("mail ok y contraseña ok")
        alert("Presione el bonton cerrar para volver al inicio")
    }else {
        alert("Datos erroneos ")
    }
}

//console.log(password)

//if(emailkey == )

let login = document.getElementById("login");

login.addEventListener("click", function(){
    validacion();
})
//funcion fetch permite conectarme con una API-end poit
fetch("https://pokeapi.co/api/v2/ability")

//con el siguiente paso toda la info de la api la guardamos en el parametro respuesta
.then((respuesta)=>respuesta.json())

//la información del  parametro restuestas ahora queda guardada en el parametro datosApi en formato JSON
.then((datosApi)=>{

console.log(datosApi)
console.log(datosApi.results[0].name)

document.getElementById("nom1").textContent = datosApi.results[0].name
document.getElementById("nom2").textContent = datosApi.results[1].name
document.getElementById("nom3").textContent = datosApi.results[2].name
document.getElementById("nom4").textContent = datosApi.results[3].name
document.getElementById("nom5").textContent = datosApi.results[4].name

})