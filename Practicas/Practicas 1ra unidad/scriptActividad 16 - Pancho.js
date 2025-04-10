
function mostrarEnConsola() {

	const numerosEnteros = [10,53,7,22,59];

	let primerElemento = numerosEnteros[0];
	let ultimoElemento = numerosEnteros[numerosEnteros.length - 1];
	console.log("El primer elemento del arreglo es: " + primerElemento);
	console.log("El ultimo elemento del arreglo es: " + ultimoElemento);
	
	let sumaTotal = 0;
	for (let i = 0; i < numerosEnteros.length; i++) {
	  sumaTotal += numerosEnteros[i];
	}
	console.log("El valor de la suma totoal de todos los elementos dle arreglo es: " + sumaTotal);

	console.log("Elementos del arreglo: " + numerosEnteros.join(", "));
	numerosEnteros.push(47);
	console.log("Elementos del arreglo con un nuevo elemento: " + numerosEnteros.join(", "));
}

