let productos=[
    {
        nombre:"Simpsons t-shirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/bart1.webp?alt=media&token=3dad1458-d84d-4133-a7e9-3914a1405d79","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/bart2.webp?alt=media&token=bfb7c568-d17e-479f-abd3-01c1a86fb0c1"],
        precio:30000,
        popularidad: 3,
        descripcion:"Printed t-shirt, fresh fabric and fun design."
    },
    {
        nombre:"Beisbol Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/beisbol1.webp?alt=media&token=0e976404-f26b-4f6e-ac70-ede3ea9065ad","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/beisbol2.webp?alt=media&token=80ccfbfa-8b5d-4cd5-bbab-d0750c3fcb5f"],
        precio:40000,
        popularidad: 4,
        descripcion:"Hoodie for printed lady, in fresh and durable fabric."
    },
    {
        nombre:"Coca cola Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/cocacola1.webp?alt=media&token=a7121f43-bb34-4fbf-9e63-b71227684c72","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/cocacola2.webp?alt=media&token=35d9bfb5-de33-4caa-9d53-dca594623c3b"],
        precio:40000,
        popularidad: 5,
        descripcion:"Hoodie in black, with coca cola print and white detail on the collar, cuffs and hem, in fresh and durable fabric."
    },
    {
        nombre:"Fanta crop top",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/fanta.webp?alt=media&token=cbffc70b-f30f-441f-9190-c8b6b5db71b6","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/fanta2.webp?alt=media&token=fb1bfd76-c618-4bcf-abea-fb191ffa228b"],
        precio:30000,
        popularidad: 3,
        descripcion:"Printed crop top, in fresh fabric with a youthful touch."
    },
    {
        nombre:"Beige Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/fashion1.webp?alt=media&token=2905b59a-7b40-4c85-bd2f-2a88a31709f9","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/fashion2.webp?alt=media&token=3740948a-5fba-43c3-b9f5-e912735265c0"],
        precio:40000,
        popularidad: 2,
        descripcion:"Beige print hoodie, with high neck, in thermal fabric."
    },
    {
        nombre:"Fruit T-shirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/frutanegra1.webp?alt=media&token=1cb33446-3823-4bb8-b071-1058869f848d","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/frutanegra2.webp?alt=media&token=88bcfe60-a75e-418f-ad7d-0d6a4ac8684b"],
        precio:35000,
        popularidad: 3,
        descripcion:"Black t-shirt with fruit print, fresh and youthful."
    },
    {
        nombre:"Black Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/negra1.webp?alt=media&token=0446e0cd-62b0-4337-9340-cf806030385c","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/negra2.webp?alt=media&token=7848e31a-66e9-40a4-a748-5383c7e41121"],
        precio:40000,
        popularidad: 4,
        descripcion:"Printed black hoodie, in fresh and durable fabric."
    },
    {
        nombre:"Landscape T-shirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/paisajeverde.webp?alt=media&token=ec87b1ee-a759-4842-868d-9f384718ad41","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/paisajeverde2.webp?alt=media&token=00656661-02d4-4e21-9758-35171ca2f29e"],
        precio:35000,
        popularidad: 5,
        descripcion:"Men's t-shirt, peach skin fabric, with landscape print."
    },
    {
        nombre:"Arizona Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/rojo1.webp?alt=media&token=fdc5687d-e96c-4581-8f53-f679f55d3c3b","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/rojo2.webp?alt=media&token=8a91830a-a80e-4c71-ab60-c426a75818d8"],
        precio:40000,
        popularidad: 4,
        descripcion:"Red hoodie, printed on fresh and durable fabric."
    },
    {
        nombre:"Snoopy Hoodie",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/snupy%202.webp?alt=media&token=895f9d00-e702-410d-83b0-99b4114b2f90","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/Camisaa%20snipy%201.webp?alt=media&token=e2388eca-188f-4194-b950-087be58931f3"],
        precio:40000,
        popularidad: 3,
        descripcion:"Printed hoodie in fresh fabric and youthful design."
    },
    {
        nombre:"Stranger t-shirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/stranger.webp?alt=media&token=4048c9f5-13de-42be-9fec-fe20fd77ccfa","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/stranger2.webp?alt=media&token=882758c1-d8e7-4db1-be84-c40c53db744b"],
        precio:35000,
        popularidad: 3,
        descripcion:"Printed t-shirt, in soft fabric and with a youthful design."
    },
    {
        nombre:"Printed t-shirt",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/WhatsApp%20Image%202022-08-21%20at%2010.11.34%20PM.jpeg?alt=media&token=762a3600-3b15-4c7e-9af6-b1be65f03bc1","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/WhatsApp%20Image%202022-08-21%20at%2010.11.52%20PM.jpeg?alt=media&token=45d0e96b-3d80-475d-bf59-8485b975ac8b"],
        precio:30000,
        popularidad: 3,
        descripcion:"Printed t-shirt in fresh fabric and youthful design."
    }
]
let fila=document.getElementById("fila")
//recorriendo el arreglo

productos.forEach(function(producto){
   //creando un div desde js
   let columna=document.createElement("div")
   columna.classList.add("col")
   //creando una tarjeta
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card","shadow","text-center","h-100","p-5")
   //creando una imagen
   let imagen=document.createElement("img")
   imagen.classList.add("img-fluid","w-100")
   imagen.src=producto.fotos[0,1]

      //detectando evento de mause
   imagen.addEventListener("mouseover",function(){
    imagen.src=producto.fotos[1]
       })
    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })
   //crear el nombre
   let nombre=document.createElement("h3")
   nombre.classList.add("fw-bold")
   nombre.textContent=producto.nombre
   //crear precio
   let precio=document.createElement("h2")
   precio.classList.add("text-dark")
   precio.textContent="$"+producto.precio

   let popularidad=document.createElement("h4")
   popularidad.classList.add("text-dark","d-none")
   popularidad.textContent=producto.popularidad
   
   let descripcion=document.createElement("h5")
   descripcion.classList.add("text-dark","d-none")
   descripcion.textContent=producto.descripcion
 

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    /*tarjeta.appendChild(calificacion)*/
    tarjeta.appendChild(popularidad)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})
