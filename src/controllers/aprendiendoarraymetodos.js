let productos=[
    {
        nombre:"MUG PERSONALIZADO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220213_130749.jpg?alt=media&token=99376dcf-0b47-4c1b-aef3-1cc468b67f43","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220213_130815.jpg?alt=media&token=09b67590-87a2-4746-9253-0ee6e455f0ec"],
        precio:20000,
        popularidad: 3,
        descripcion:"Mug sublimado, personalizado, puedes escoger la imangen que te represente y tu nombre."
    },
    {
        nombre:"CAMISETA SUBLIMADA",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220221_145839.jpg?alt=media&token=308575b1-30c9-4a1d-9c47-9ade4bfe241f","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETA%20OJO.jpg?alt=media&token=e6218963-587e-41b1-9d87-b49639051074"],
        precio:35000,
        popularidad: 4,
        descripcion:"Camiseta sublimada hombre, en tela piel de durazno, fresca y durable."
    },
    {
        nombre:"CAMISETA GIR POWER",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETA.jpg?alt=media&token=b70cf86a-d76c-4435-b553-71c812cffb07","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETA%20GIRL%20POWER.jpg?alt=media&token=a1b91942-3c42-4036-8fae-dc05cb3884dc"],
        precio:30000,
        popularidad: 5,
        descripcion:"Camiseta para mujer, tela piel de durazno, suave, estilo crop top, talla única."
    },
    {
        nombre:"TERMO SUBLIMADO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/TERMO.jpg?alt=media&token=fbcaa752-d54a-4111-a966-f037c356072d","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/TERMOAMIGAS.jpg?alt=media&token=87188ba6-5f2c-4031-a10e-5b7b17228653"],
        precio:30000,
        popularidad: 3,
        descripcion:"Termo personalizado fabricado en aluminio, apto para liquidos calientes y frios."
    },
    {
        nombre:"CAMISETAS PARA PAREJAS",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETAS%20YIN%20YAN.jpg?alt=media&token=5acf2460-ad18-4b9a-822b-f63d79c502e3","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/CAMISETASAMISTAD.jpg?alt=media&token=2c70adf7-5f3d-49bc-bf12-a77a9fe4ebb0"],
        precio:60000,
        popularidad: 2,
        descripcion:"Camisetas para usar en pareja, en tela piel de durazno, tallas variadas"
    },
    {
        nombre:"MUG FELICES",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/MUG%20FELICES.jpg?alt=media&token=bfa8428c-71dc-434c-bace-9cd2e0d0c022","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/IMG-20220215-WA0047.jpg?alt=media&token=74f679c7-77f9-4946-a70e-c8ad294964a2"],
        precio:20000,
        popularidad: 3,
        descripcion:"Mug personalizado"
    },
    {
        nombre:"MUG PAREJA",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220213_130555.jpg?alt=media&token=19447927-54f2-482e-b1cf-f61cdd78c9f7","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220213_130348.jpg?alt=media&token=5319f85c-4e26-4bb8-b984-4fd7e78a1798"],
        precio:40000,
        popularidad: 4,
        descripcion:"Mug amigas personalizado"
    },
    {
        nombre:"CAMISETA RETRO",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/IMG-20220806-WA0010.jpg?alt=media&token=9d4bacf9-bf3a-44d7-a614-a6a76b3a0dee","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220812_151142.jpg?alt=media&token=1e30c5fb-da24-46d8-9ee7-5555eaa68e0b"],
        precio:30000,
        popularidad: 5,
        descripcion:"Camiseta para mujer, tela piel de durazno, suave, estilo crop top, talla única"
    },
    {
        nombre:"MUG LUNA",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/IMG-20220215-WA0054.jpg?alt=media&token=a3f9e145-6d90-4386-a015-3e387f88e86a","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/MUG%20HOY.jpg?alt=media&token=124a5881-87cd-456d-954b-4823cbc937ce"],
        precio:20000,
        popularidad: 4,
        descripcion:"Mug personalizado"
    },
    {
        nombre:"MUG CUMPLEAÑOS",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220413_215559.jpg?alt=media&token=11b0e88c-0e63-4864-9f26-2b9a109bc82e","https://firebasestorage.googleapis.com/v0/b/tiendasuralmm.appspot.com/o/20220413_215616-01.jpeg?alt=media&token=56f68ec5-68de-4f86-9d65-ec704cf4e6c2"],
        precio:20000,
        popularidad: 3,
        descripcion:"Mug personalizado"
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
