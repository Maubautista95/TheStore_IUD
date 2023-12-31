//Variable con la que manipularemos el formulario.
const formularioProducto = document.querySelector('[data-att-formulario]')
//Variables que guardan los inputs.
const nombreFormulario =  document.querySelector('[data-att-nombreFormulario]');
const precioFormulario =  document.querySelector('[data-att-precio]');
const inventarioFormulario = document.querySelector('[data-att-inventory]');
//Divs vacíos que mostrarán el mensaje de alerta
const divMensajeNombre = document.getElementById("mensaje-nombre")
const divMensajePrecio = document.getElementById("mensaje-precio")
const divMensajeInventario = document.getElementById("mensaje-inventario")

//Objeto que guarda los mensajes de alerta que utilizamos en los condicionales de manejarEnvio
const mensajesDeAlerta = {
    "mensajeNombre" : "Por favor, introduce un nombre válido",
    "mensajePrecio":  "Por favor, introduce un precio",
    "mensajeInventario":  "Por favor, introduce el número de inventario"
}

//Función para prevenir el envío automático del formulario, y que también se encarga de analizar el valor de cada input y en base a condicionales
//Asignar un valor del objeto al innerText de cada div específico, y de quitarlo a través de else, si es que se cumple que el valor no esté vacío

function manejarEnvio (event){

    event.preventDefault();

    if (nombreFormulario.value === "" ){
        divMensajeNombre.innerText =  mensajesDeAlerta["mensajeNombre"]

    }else{
        divMensajeNombre.innerText = "";
    }
    
    if (precioFormulario.value ===""){
        divMensajePrecio.innerText = mensajesDeAlerta["mensajePrecio"];
    }else{
        divMensajePrecio.innerText =  "";
    }

    if (inventarioFormulario.value === ""){
        divMensajeInventario.innerText = mensajesDeAlerta["mensajeInventario"];
    }else{
        divMensajeInventario.innerText =  "";
    }

    if (nombreFormulario.value != "" && precioFormulario.value != "" && inventarioFormulario != ""){
        alert("Producto creado");
    }

}

//Con addEventListener hacemos que en el submit del formulario, se ejecute manejarEnvio, verificando que los campos no estén vacíos.
formularioProducto.addEventListener("submit", manejarEnvio)

