
function mostrarEnConsola() {
	const nombreInput = document.getElementById("txtNombre").value;
	recibirNombre(nombreInput);
}

function recibirNombre(nombre){
	let x = nombre.toUpperCase(); 	//Se convierte el nombre a mayusc

	//Verifico si existe la letra e
	if(x.includes("E")){
		console.log("El nombre si contieiene la letra E");
	}else{
		console.log("El nombre NO contieiene la letra E");
	}

	console.log("La primera letra del nombre es: " + x.substring(0,1));

	console.log("Hola " + x + ", tu nombre contiene la letra E: " + x.includes("E") + ". Empieza con la letra " + x.slice(0,1))
}