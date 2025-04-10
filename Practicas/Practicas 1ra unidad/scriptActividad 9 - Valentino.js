function impresion() {
	document.getElementById('contrasena')
	console.log(capibara.color + "\n");
	capibara.dormir()
}

let capibara = {
	nombre: "Carlos",
	color: "cafe",
	edad: 30,
	sexo: "Macho",
	dormir: function(){
		console.log("Hola, soy Carlos y estoy durmiendo")
	}
}