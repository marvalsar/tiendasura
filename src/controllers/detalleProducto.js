console.log("hola estoy detallando la compra")
//llamar a la memoria
let producto = JSON.parse(localStorage.getItem("producto"))
console.log(producto)
<<<<<<< HEAD

let carrito
if(JSON.parse(localStorage.getItem("carrito"))!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    let pildora = document.getElementById("pildora")
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let carritoMemoria=JSON.parse(localStorage.getItem("carrito"))
console.log(carritoMemoria)

//referenciar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src = producto.foto1

foto.addEventListener("mouseover",function(){
    console.log("hooooooola")
    console.log(producto)
    foto.src=producto.foto
})
=======
//referenciar la imagen del producto
let foto = document.getElementById("imagenInfo")
foto.src = producto.foto
>>>>>>> 5fa34a7a854f1878991f94e1fd37a40037f129c1

let nombre = document.getElementById("nombreInfo")
nombre.textContent = producto.nombre

let precio = document.getElementById("precioInfo")
precio.textContent = producto.precio

let descripcion = document.getElementById("descripcionInfo")
descripcion.textContent = producto.descripcion

<<<<<<< HEAD
let popularidad= localStorage.getItem("contador")
producto.popularidad=popularidad

let pildora = document.getElementById("pildora")
console.log(pildora.textContent) 


//Escuchar el click en el boton  Añadir carrito 

let botonCarrito = document.getElementById("botonAgregarCarrito")
botonCarrito.addEventListener("click",function(evento){

    let cantidad = document.getElementById("cantidadProducto")
    cantidad = cantidad.value
   
    //agregamos la cantidad al objeto producto

    producto.cantidad=cantidad
    console.log(producto)

    //agregamos el producto al carrito de compras

    carrito.push(producto)
    console.log(carrito)

    //agregando el carrito a la memoria
    localStorage.setItem("carrito",JSON.stringify(carrito))

    //pintando la pildora con la cantidad de producto
    let cantidadCarrito=carrito.length
    pildora.textContent=cantidadCarrito
})





 
    
  


=======

 
>>>>>>> 5fa34a7a854f1878991f94e1fd37a40037f129c1
