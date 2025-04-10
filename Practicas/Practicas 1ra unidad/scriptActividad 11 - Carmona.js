/*function impresion() {
	document.getElementById('Prueba').innerHTML = ;
	console.log(capibara.color + "\n");
	capibara.dormir()
}


let Perro = {
	nombre: "Carlos",
	color: "Negro",
	edad: 3,
	sexo: "Macho",
	raza: "Pugg",
	ladrar: function(){
		console.log("Hola, soy un pug y estoy ladrando")
	}
}*/

function Perro(nombrePerro, razaPerro, colorPerro, edadPerro, sexoPerro) {
  this.nombre = nombrePerro;
  this.raza = razaPerro;
  this.color = colorPerro;
  this.edad = edadPerro;
  this.sexo = sexoPerro
}

const perroNuevo1 = new Perro("Morita", "Snouser de la calle", "Negro", 8, "Hembra");

function mostrarPropiedades() {
	document.getElementById('h1Name').innerHTML = perroNuevo1.nombre;
	document.getElementById('h1Raza').innerHTML = perroNuevo1.raza;
	document.getElementById('h1Color').innerHTML = perroNuevo1.color;
	document.getElementById('h1Edad').innerHTML = perroNuevo1.edad;
	document.getElementById('h1Sexo').innerHTML = perroNuevo1.sexo;

	console.log("Nombre: " + perroNuevo1.nombre)
	console.log("Color: " + perroNuevo1.color)
	console.log("Edad: " + Perro.edad)
	console.log("Sexo: " + Perro.sexo)
	console.log("raza: " + Perro.raza)
}