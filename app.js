//COMENTARIO L
/*
comentrio de bloque
*/

  console.log("HOLA MUNDO");
  console.log("holamundo".leingth);

//constante
  const pi=3.1416182432;
  console.log(pi);


//variable tipo
  var variable1 ="Hola mundo";
  var variable2 = true;
  var variable3 = 4;

//matematicas;
console.log(variable3 +pi);

//multiplicacion
console.log(variable3 *pi);

//errorcuando sumas texto con letras te aparece todo como texto
console.log(variable1 +variable3);

//mensaje de interraccion
/*confirm("Que guapa eres");



var respuesta = confirm("que guapa eres");
console.log(respuesta);


for (var i = 0; i < 10; i++) {
  console.log(i);
}*/

// cambia o quita los iguales para ver cambios y si pones ! despues del primer 5 niegas y con un solo igual
console.log(5!="5");


// como hacer la tabla de multiplicar
/*for (var i = 0; i < 60; i++) {
  console.log("por 6",ci*6);
}*/

console.log("modulo ->" + 12%2);
console.log(!false);

if(!("xavi".length>=10) || variable3 ==4)
{
  console.log("eres joven")
}


for (var i=20; i>=10; i--){
  if(i%2==0){
    console.log(i);
  }
}

console.log("Diana Jonaitis".substring(6,14))



/* //input ventanas
alert("mensaje por pantalla");
var resultado =confirm("eres guapa");
console.log(resultado);
var edad= prompt("introduce tu edad", "va tio");
console.log(edad)
confirm("eres guapa");*/

/*const actual = 2017;
var nombre= prompt("Introduce tu nombre");
var año= prompt ("Introduce tu año de nacimiento");
var operacion = actual - año;
console.log("hola " +   nombre  +   " Tu edad es "  +  operacion);*/

/*console.log("numero aleatorio" + Math.random())

console.log("numero aleatorio" + (Math.floor(Math.random()*3)+1));*/


let ValorOrdenador=Math.floor(Math.random()*3)+1;
console.log("El ordenador elige" ,ValorOrdenador);

let ValorElegido=0;
let nombre= prompt("Introduce tu juego");
console.log(nombre);

if (nombre=="Piedra")
  {ValorElegido=1};

if (nombre=="Papel")
    {ValorElegido=2};

if (nombre=="Tijera")
    {ValorElegido=3};

if (ValorElegido==ValorOrdenador)
    { console.log("empate");    }

if (ValorElegido==1) // Nosotros elegimos Piedra
{
  if (ValorOrdenador==1) console.log("empate");
  if (ValorOrdenador==2) console.log("Gana ordenador");
  if (ValorOrdenador==3) console.log("Ganamos nosotros");
}
if (ValorElegido==2) // Nosotros elegimos Papel
{
  if (ValorOrdenador==1) console.log("Ganamos nosotros");
  if (ValorOrdenador==2) console.log("empate");
  if (ValorOrdenador==3) console.log("Gana ordenador");
}
if (ValorElegido==3) // Nosotros elegimos Tijera
{
  if (ValorOrdenador==1) console.log("Gana ordenador");
  if (ValorOrdenador==2) console.log("Ganamos nosotros");
  if (ValorOrdenador==3) console.log("Empate");
}
console.log("valor:" + ValorElegido);
