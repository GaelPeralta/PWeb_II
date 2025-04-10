function corregirError() {
  let numero1 = 10;
  let numero2 = 5;
  let resultado = numero1 + numero2;
  if (resultado == 15) {
  console.log("El resultado es: " + resultado)
  }
  let mensaje = "El resultado se imprime en la consola de la pagina";
  document.getElementById("mensaje").innerHTML = mensaje; 
}