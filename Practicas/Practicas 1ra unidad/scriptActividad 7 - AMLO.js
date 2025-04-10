function enviarInformacion() {
	const edad1 = parseInt(document.getElementById('txtA').value);
	const edad2 = parseInt(document.getElementById('txtB').value);

	if(edad1 == edad2){
		console.log("Ambas constantes tienen el mismo valor");
	}else if(edad1 > edad2){
		console.log("la constante edad1 es mayor que edad 2");
	}else{
		console.log("la constante edad2 es mayor que edad 2");
	}
}