let Perro = {
	nombre: "Carlos",
	color: "Negro",
	edad: 3,
	sexo: "Macho",
	raza: "Pugg",
	ladrar: function(){
		console.log("Hola, soy un pug y estoy ladrando")
	}
}

function mostrarPropiedades() {
	console.log("Nombre: " + Perro.nombre)
	console.log("Color: " + Perro.color)
	console.log("Edad: " + Perro.edad)
	console.log("Sexo: " + Perro.sexo)
	console.log("raza: " + Perro.raza)
}