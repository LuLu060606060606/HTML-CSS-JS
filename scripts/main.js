
console.log("Hola mundo"); /*Imprime por consola*/

/* var palabra reservada para aignar valores*/
var Numero1=52.5;
var Numero2=45;
console.log(Numero1+Numero2);

var nombre='LuLu';
var apellido="Maria";

console.log(nombre);
console.log(apellido);

var tiene_mascota=true;
tiene_mascota=false;

var frutas =['manzana', 'pera', 'lulo', 25, true] 
console.log(frutas);

var persona={
	nombre:"LuLu", 
	edad:25, 
	tiene_mascota:true,
	mascota:{raza:'Dalmata', nombre:'Rufo'}
};

var fecha=new Date();
console.log(fecha);

console.log(persona['nombre']);
console.log(persona.edad);//modo mas comun de traer las variables de interes
console.log(persona.mascota.nombre, (persona.mascota.raza ));

console.log(!false);//negacion
console.log(true && false);//and
console.log(false || true);//or


/*en las siguientes impresiones, la respuesta siempre sera un booleano*/
console.log(5%4);
console.log(3>6);//mayor que
console.log(6==6);//igualdad
console.log(6!=6);//Diferencia

var edad=17;

if (edad>=18){
	console.log("Usted es mayor de edad, felcitaciones :) puede ingerir licor, substancias psicoactivas y disfrutar de los placeres de la promiscuidad")
}else{
	console.log("Usted no es mayor de edad :(, esta pagina no es apta para usted")
}


for (var i = 0; i < 5; i++) {
	console.log(i);
}


var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
for (var i = 0; i < 7; i++) {
	console.log(dias[i]);
}

function suma(n1,n2){
	var res=n1+n2;
	return res;
}

//alert (suma(8,4));



function iva(precioProducto){
	var iva=precioProducto*0.19;
	return iva;
}

alert(iva(10000))





























