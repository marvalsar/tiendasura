let formulario = document.querySelector('#formulario')
let boton = document.querySelector('#boton')


let filtrar = ()=>{
    console.log(formulario.value)
}
boton.addEventListener('click', filtrar)