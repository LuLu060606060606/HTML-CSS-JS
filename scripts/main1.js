/*var titulos= document.getElementsByTagName('h1');
console.log(titulos);

function cambiaMensaje(){
var textosRojo=document.getElementsByClassName("rojo");
//console.log(textosRojo[1].textContent);
textosRojo[1].textContent="grupo 175";
}

var fecha=document.getElementById("Fecha");
console.log(fecha);*/


function calcularIva(){
	 var precio = parseInt(document.getElementById("precio").value);
	 var res=precio*0.19; 
	 var spanRes=document.getElementById("resultado");
	 spanRes.textContent=res;

}