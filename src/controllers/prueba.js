let boton=document.getElementById("boton")

boton.addEventListener("click",function(){
    let nombre=document.getElementById("nombre").value //value captura lo que escribo en la caja
    let saludo=document.getElementById("saludo")
    saludo.textContent="Hola  " + nombre + " Como estas" 
})
