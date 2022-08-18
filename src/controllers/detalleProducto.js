console.log("hola estoy detallando la compra")
//llamar a la memoria
let producto = JSON.parse(localStorage.getItem("producto"))
console.log(producto)
//referenciar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src = producto.foto

let nombre = document.getElementById("nombreInfo")
nombre.textContent = producto.nombre

let precio = document.getElementById("precioInfo")
precio.textContent = producto.precio

let descripcion = document.getElementById("descripcionInfo")
descripcion.textContent = producto.descripcion

let pildora = document.getElementById("pildora")
pildora.textContent = producto.pildora

//Escuchar el click en el boton  Añadir carrito 

let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad = document.getElementById("cantidadProductos")
    cantidad = cantidad.value
    console.log("agregaste: " + cantidad)

})



//let carrito=document.getElementById("")

 
// let botoncalificar=document.getElementById("comprar")
// botoncalificar.addEventListener("click",function(){
    
//     let popularidad= localStorage.getItem("contador")
//     producto.popularidad=popularidad

//     let cantidad=document.getElementById("cantidad").value
//     producto.cantidad=cantidad

//     console.log(producto)


   

// })
