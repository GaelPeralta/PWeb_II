
function cambiarTexto(){
	const nombreInput = document.getElementById("txtNombre").value;
	const edad = document.getElementById("txtEdad").value;
	const edadInput = parseInt(edad);

	const mensaje = saludoPersonalizado(nombreInput, edadInput);
	document.getElementById('mensaje').innerHTML = mensaje;

	document.getElementById('parImpar').innerHTML = "La edad ingresada es par? " + esPar(edadInput);
}

function saludoPersonalizado(nombre, edad){
	return `hola ${nombre}, tienes ${edad} anios de edad`;
}

function esPar(numero) {
  
  if(numero % 2 === 0){
  	return true
  }else{
  	return false
  }
}
const numeroGrande = 9007199254740991n;
const otroNumeroGrande = 10000000000000000n;
