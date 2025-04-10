function enviarInformacion() {
	const precioProducto = parseInt(document.getElementById('txtA').value);
	const cantidad = parseInt(document.getElementById('txtB').value);

	let resultado = precioProducto * cantidad;
	console.log("Total a pagar: " + resultado);
}