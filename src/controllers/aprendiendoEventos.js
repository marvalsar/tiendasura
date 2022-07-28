let etiquetaBoton=document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS
etiquetaBoton.addEventListener("click",function(){
    console.log("Estoy haciendo clic")
    let titulo=document.getElementById("titulo")//crear varialbe
    titulo.textContent="Hola soy Marina"//traer la variable
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="Mentiras van a ganar"
    mensaje.classList.add("text-danger")//para cambiar el color
    let foto=document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/MUG%20CIERVO.jpg?alt=media&token=205b1909-5aa1-4c37-9751-d4b83f355dcd"
})

//para decirle que hacer debe haber una funcion
//funcion anomina, que no tiene nombre,solo se ejecuta una sola vez ya que no la podemos llamar

