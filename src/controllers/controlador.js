//CREANDO VARIABLES
let nombreUsuario="Luz Marina Marin"
const EDAD_USUARIO=47
let estaturaUsuario=1.50
let hinchaDelVerde=false

console.log(nombreUsuario)
EDAD_USUARIO
console.log(EDAD_USUARIO)

//ARREGLOS DATOS
//UNA ARREGLO ES UNA VARIABLE ESPECIAL
//1. ARREGLO TRADICIONAL

let numeros=[1,2,8,9,45]
let nombres=["juan","catalina","mario","carlos"]
let contagios=[true, false, false, false, true]

//1.1 ACCEDIENDO A TODOS LOS DATOS (ELEMENTOS) DE UN ARREGLO
console.log(numeros)

//1.2 ACCEDIENDO A UN SOLO ELEMENTO DEL ARREGLO

console.log(numeros[3])

//2.ARREGLOS ORIENTADOS A OBJETOS ARREGLOS POO

let notas=Array(3.2,2.8,3.9,5)
console.log(notas)
console.log(notas[1])

//3.VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS DE TIPOS DIFERENTES
//OBJETOS SON LAS VARIABLES ESPECIALES QUE NOS PERMITEN
//GUARDAR VARIOS ATRIBUTOS

let persona={
    nombre:"luz marina",
    apellido:["marin","aguirre"],
    edad:47,
    hinchaDelMejor:false
}

//3.1 ACCEDIENDO A TODOS LOS DATOS DE UN OBJETO

console.log(persona)

//3.2 ACCEDIENDO A UN SOLO ATRIBUTO DEL OBJETO

console.log(persona.nombre)
console.log(persona.apellido[0])


