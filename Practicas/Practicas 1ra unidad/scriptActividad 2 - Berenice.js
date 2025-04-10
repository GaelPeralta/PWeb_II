
function imprimirNombre() {
    let nombre = document.getElementById("txtA").value; 

    let mensaje = `Hola, ${nombre}, bienvenido a la practica de javascript`;

    alert(mensaje);  
    console.log(mensaje); 

    document.getElementById("mensaje").innerHTML = mensaje;  
}

