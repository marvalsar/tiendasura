let carrito = JSON.parse(localStorage.getItem("carrito"))
let totalCompra=document.getElementById("totalCompra")
let totalCalculado = 0
let moneda = 0

//traigo a factura

let factura = document.getElementById("factura")

//compruebo el estado del carrito de compras

if(carrito == null){
    //poner el total en 0
    totalCompra.textContent="Total: $0"
    totalusd.textContent="USD: $0"
    
    let fila = document.createElement("div")//creo la fila
    fila.classList.add("row","my-5","justify-content-center")
    
    let columna = document.createElement("div")//creo la columna
    columna.classList.add("col-12", "col-md-8")
    
    let imagen = document.createElement("img")//creo la imagen
    imagen.classList.add("img-fluid","w-100")
    imagen.src = "../../assets/img/empty-cart.png"
    
    let mensaje = document.createElement("h2")
    mensaje.classList.add("text-center")
    mensaje.textContent = "Your cart is empty"

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)

}else{
    //recorro el carrito
    carrito.forEach(function(producto){
        let fila = document.createElement("div")
        fila.classList.add("row","my-5","justify-content-center")
        
        let columna1 = document.createElement("div")
        columna1.classList.add("col-12","col-md-5")
        
        let columna2 = document.createElement("div")
        columna2.classList.add("col-12","col-md-3")
        
        let columna3 = document.createElement("div")
        columna3.classList.add("col-12","col-md-3")

        let foto = document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src = producto.foto

        let nombre = document.createElement("h2")
        nombre.classList.add("text-center","text-muted")
        nombre.textContent=producto.nombre

        let descripcion = document.createElement("h3")
        descripcion.classList.add("text-muted")
        descripcion.textContent=producto.descripcion

        let cantidad = document.createElement("h3")
        cantidad.classList.add( "text-muted")
        cantidad.textContent="Quantity: "+producto.cantidad

        let precio = document.createElement("h3")
        precio.classList.add("text-muted","mt-5")
        precio.textContent="Single cost: "+producto.precio

        let subtotal=document.createElement("h3")
        subtotal.classList.add("fw-bold", "text-muted")
       
        let subtotalcalculado=producto.precio.split("$")[1]*producto.cantidad
        console.log(subtotalcalculado)
        subtotal.textContent="$"+subtotalcalculado

        //para calcular el total debo sumar los subtotales

        totalCalculado = totalCalculado + subtotalcalculado
     
        let botonLimpiar=document.getElementById("botonLimpiar")
        botonLimpiar.addEventListener("click",function(evento){

            //limpio el carrito de la memoria
            localStorage.removeItem("carrito")

            //recargar la pagina
            window.location.href="./resumenCompra.html"

            
        })
         //convertir pesos en dolar
        moneda =  totalCalculado*0.00023
        
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)
    })
    console.log(totalCalculado)
    //poner el total en 0
    totalCompra.textContent="Total: $"+totalCalculado
    //pintar la conversion
    totalusd.textContent="USD: $"+moneda
    

}