
function mostrarEnConsola() {
	let x = 7.123456;
	console.log("El numero es: " + x)
	console.log("Es entero?: ", Number.isInteger(x));
	console.log("Redondeado a 2 decimales:", x.toFixed(2));
	console.log("Notacion cientifica con 3 digitos:", x.toExponential(3));
}

