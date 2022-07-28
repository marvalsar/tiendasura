//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS
//1.CONTROLANDO EL CONTENIDO

let etiqueTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)

etiqueTitulo.textContent="jefe usted es como mi padre"

//1.1 MANIPULANDO EL SRC

etiquetaImagen.src="https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETAS%20YIN%20YAN.jpg?alt=media&token=5acf2460-ad18-4b9a-822b-f63d79c502e3"

//2. controlando el diseño
// "Let Parrafo (es para crear la variable), document.getElementById es para deicrle que haggare un elemento de tipo ID, y el ("parrao") es para decir de donde coge el ID
let parrafo = document.getElementById("parrafo")
parrafo.textContent="Buenas noches pum pum"
//2.1 AGREGANDO UN ESTILO (CLASS)
//text-danger
parrafo.classList.add("text-danger","fs-1","text-center")
etiquetaImagen.classList.add("d-block","mx-auto","w-25")

//2.2 QUITANDO UN ESTILO
parrafo.classList.remove("text-danger")
