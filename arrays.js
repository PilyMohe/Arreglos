/*
Ejercicios en clase

// Declarar un areglo vacio

let verduras = [];

// Declarar un arreglo con datos

let frutas = ["Manzana", "Pera", "Fresa", "Maracuya"]

//Javascrip te permite tener arreglos con diferentes tipos de datos

let datos =[true, 0, null, "hola", "Juan", false]

// Acceder a los valores
console.log(frutas[2]);
console.log(datos[4]);

// Modificar un valor
frutas[3] = "Mango"

//Visualizacion todo mi arreglo

console.log(frutas);

console.log(frutas.length) // longitud de mi arreglo 

// Metodos de Arrays

// Agregar elementos al final de mi lista 
frutas.push("Mandarina")
frutas.push("Kiwi")
frutas.push("Uvas")

//Eliminar el ultimo item
frutas.pop(frutas);

//Visualizar arreglos
console.log(frutas);

//Agregar elementos al incicio

frutas.unshift("Toronja")
frutas.unshift("platano")

//Quitar el elemento al inicio de la lista
frutas.shift();

//Visualizar arreglos
console.log(frutas);

//Una cadena de texto
let texto = "Hallo, Ich bin Pilar, Ich komme aus Mexiko"
console.log(texto);

//Crear un arreglo a partir de un texto(indicamos el simbolo)
let presentacion = texto.split(",");
console.log(presentacion);
console.log(texto);

//Ordenando de forma alfabetica
console.log(presentacion.sort());
console.log(frutas.reverse());

console.log(verduras);

verduras.push("Brocoli 🥦");
verduras.push("Zanahoria 🥕");
verduras.push("Papa 🥔");

console.log(verduras);

//utiliza concat para poder unir 2 arreglos
let listasuper = frutas.concat(verduras);
console.log(listasuper);

// Creacion de objeto literal
let persona ={
    nombre: "Pilar",
    edad: 34,
    escolaridad: "licenciatura",
    femenino: true,
// un objeto literal puede tener funciones
    saludar: function(){
        console.log("hola mi nombre es" + this.nombre);
    }
}

//Accediendo a las propiedades mediante
console.log(persona.femenino);
console.log(persona.nombre);

console.log(persona.saludar)
//llamando a la funcion (metodo) saludar
persona.saludar();

//Otro forma de acceder a las propiedades
console.log(persona["escolaridad"]);
*/


//Ejercicio 1 Numeros al azar
let numeroalazars = [];

for (let i = 0; i < 10; i++) {
    // Genera un número aleatorio entre 1 y 100 (puedes ajustar el rango)
    let numeroalazar = Math.floor(Math.random() * 100) + 1;
    numeroalazars.push(numeroalazar);
}

console.log(numeroalazars);

//Ejercicio 2 

let cadena = prompt("Escribe tu Nombre, Edad, Donde vives, Profesion separados por comas");
let resultado = cadena.split(",");
console.log(resultado);

//Ejercicio 3 Mayor y menor

let numeros = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
let numerosOrdenados = numeros.slice().sort((a, b) => a - b);

// Encontrar el número menor y mayor
let numeromenor = Math.min(...numeros);
let numeromayor = Math.max(...numeros);

// Imprimir los resultados
console.log("El arreglo ordenado de menor a mayor:", numerosOrdenados);
console.log("El número menor es:", numeromenor);
console.log("El número mayor es:", numeromayor);


// Ejercicio Extra Cuenta bancaria 

let cuentaBancaria ={
    saldo: 500,
    transacciones: [],
    
    realizarDeposito(monto) {
        if (this.saldo + monto <= 990) {
        this.saldo += monto;
        const fecha = new Date();
        this.transacciones.push(`[${fecha.toLocaleString()}] Depósito de $${monto}`);
        return true;
        } else {
        alert("No puedes exceder el límite de $990.");
        return false;
        }
        },
    
      // Método para retirar dinero
    realizarRetiro(monto) {
        if (this.saldo - monto >= 10) {
        this.saldo -= monto;
        const fecha = new Date();
        this.transacciones.push(`[${fecha.toLocaleString()}] Retiro de $${monto}`);
        return true;
        } else {
        alert("No puedes tener menos de $10 en tu cuenta.");
        return false;
        }
        },
    
      // Método para consultar el saldo y las transacciones
        consultarSaldo() {
        alert(`Saldo actual: $${this.saldo}\nHistorial de transacciones:\n${this.transacciones.join('\n')}`);
        }
    };
    
    // Función principal para interactuar con el usuario
    function realizarOperacion() {
        let saldo = 500
        const operacion = prompt("¿Qué deseas hacer? (depositar/retirar/consultar)");
        
        if (operacion === 'depositar') {
        const monto = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (cuentaBancaria.realizarDeposito(monto)) {
            alert(`Se ha depositado $${monto}. Saldo actual: $${500+monto}`);
        //alert("Depósito realizado con éxito. Nuevo Saldo"//
            
        }
        } else if (operacion === 'retirar') {
        const monto = parseFloat(prompt("Ingrese el monto a retirar:"));
        if (cuentaBancaria.realizarRetiro(monto)) {
            alert(`Se ha retirado $${monto}. Saldo actual: $${saldo-monto}`);  
        //alert("Retiro realizado con éxito.");//
        }
        } else if (operacion === 'consultar') {
        cuentaBancaria.consultarSaldo();
        } else {
        alert("Opción inválida.");
        }
    }
    realizarOperacion();

    console.log(cuentaBancaria)