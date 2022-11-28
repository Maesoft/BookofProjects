var form = document.getElementById("form");
var inputs = document.getElementsByTagName("input");
var datos = new Array();
form.addEventListener("submit", procesarFormulario);
function procesarFormulario(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].value == "") {
            console.log("El campo ".concat(inputs[i].name, " esta vacio."));
            return;
        }
        else if (/^([0-9])*$/.test(inputs[0].value)) {
            console.log("El campo Nombre no puede contener numeros.");
            return;
        }
        else if (/^([0-9])*$/.test(inputs[1].value)) {
            console.log("El campo Apellido no puede contener numeros.");
            return;
        }
        else if (!(/^([0-9])*$/.test(inputs[3].value))) {
            console.log("El campo Telefono solo puede contener numeros.");
            return;
        }
        else if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(inputs[4].value))) {
            console.log("Introduzca un correo electronico valido.");
            return;
        }
        datos[i] = inputs[i].value;
    }
    console.log("*********************************************");
    console.log("El formulario se proceso correctamente.");
    console.log("*********************************************");
    console.log(datos);
}
