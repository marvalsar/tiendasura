//codigo que sume 2 numeros
/*let numero1=5
let numero2=10
let suma = numero1+numero2
console.log("La suma es:  "+suma)

let numero3=50
let numero4=100
let suma2 = numero3+numero4
console.log("La suma es:  "+suma2)*/
//codigo artesanal

//CREANDO FUNCIONES
//DECLARANDO LA FUNCION

function sumarDosNumeros(numero1,numero2){

    let suma=numero1+numero2
    return("La suma es:  "+suma)//el retorno no garantiza que se va a mostrar
}

//LLAMANDO LA FUNCION
let resultado = sumarDosNumeros(5,10)//igualo una variable a una funcion estoy llamando a la funcion
console.log(resultado)
sumarDosNumeros(50,100)