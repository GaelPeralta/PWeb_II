function resultado(){
	const edad = document.getElementById("txtEdad").value;
	const edadInput = parseInt(edad);

	if (edadInput > Number.MAX_SAFE_INTEGER) {
			mensaje = "El numero es mayor que MAX SAFE";
		} else if (edadInput < Number.MIN_SAFE_INTEGER) {
			mensaje = "El numero es menor que MIN SAFE";
		} else {
			mensaje = " El número está dentro del rango seguro de enteros.";
		}

	if (edadInput < Number.MIN_VALUE){
		
	}else{
		
	}
}
