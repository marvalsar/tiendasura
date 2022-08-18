// class carrito{
//     //añadir el producto al carrito
//     comprarProducto(e){
//         e.preventDefault();
//         if(e.target.classList.contains('agregar-carrito')){
//             const producto = e.target.parentElement.parentElement;
//             this.leerDatosProducto(producto);
//         }
//     }
//     leerDatosProducto(producto){
//         const infoProducto = {
//             imagen : producto.querySelector('imagenInfo').src,
//             nombre : producto.querySelector('nombreInfo').textContent,
//             precio : producto.querySelector('precioInfo').textContent,
//             id : producto.querySelector('a').getAtribute('data-id'),
//             catidad : 1
//         }
//         this.insertarCarrito(infoProducto);
//     }
//     insertarCarrito(producto){
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>
//                 <img src="${producto.imgen}" width=100>
//             </td>
//             <td>${producto.nombre}</td>
//             <td>${producto.precio}</td>
//             <td>
//                 <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
//         `;
//         listaProductos.appendChild(row);
//     }
//     eliminarProducto(e){
//         e.preventDefault();
//         let producto, productoID;
//         if(e.target.classList.contains('barrar-producto')){
//             e.target.parentElement.parentElement.remove();
//             producto = e.target.parentElement.parentElement;
//             productoID = producto.querySelector('a').getAtribute('data-id');
//         }
//     }
// }