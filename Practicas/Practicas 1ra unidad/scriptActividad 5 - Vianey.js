
function saludar(nombre){
    let Mensaje = "Hola, " + nombre;
    alert(Mensaje);
    console.log(Mensaje);
}

function esMayorEdad(edad) {
    return edad >= 18; 
}

function enviarInformacion() {
    let nombre = document.getElementById('txtA').value;
    let edad = parseInt(document.getElementById('txtB').value);

    saludar(nombre);
    if(esMayorEdad(edad)){
        console.log("Si, si es mayor de edad");
    }else{
        console.log("No, no es mayor de edad");

    }
}