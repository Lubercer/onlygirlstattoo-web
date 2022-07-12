
class Reserva{
    constructor(nombre,sucursal,fecha, precio){
        this.nombre = nombre
        this.sucursal = sucursal
        this.fecha = fecha
    }
}
const userReserva = []

// arrays de los diferentes productos
const piercingsArray = [
  {nombre: "microdermal", price: 2000},
  {nombre: "daith", price: 900},
  {nombre:"industrial",price: 850},
  {nombre: "tragus", price: 800},
  {nombre: "labret", price: 750}
]

/* Usaremos esta funcion para saber quien es y que busca el cliente */
 function datos() { 
    let nombreApellido = prompt ("Por favor ingrese su nombre y apellido");
    alert ("¡bienvenidx! " + nombreApellido + " haz click en ACEPTAR para continuar");
}
datos();

  // función para pedir datos y guardar la reserva en un objeto ↓
    const pedirDatosReserva = (nombre) =>{
            nombre = prompt('¿Que perforación te vas a realizar?');
        if(nombre === 'microdermal' || nombre === 'daith' || nombre === 'industrial' || nombre === 'tragus' || nombre === 'labret'){
            let sucursal = prompt('Elegí una de nuestras sucursales: Nordelta - Pacheco')
            let fecha = prompt('Elegí la fecha (ej 15/03/22)')
            alert ("¡Turno agendado! Gracias <3")
            let precio = piercingsArray.find((elemento) => elemento.price === nombre)
            userReserva.push(new Reserva(nombre, sucursal, fecha, precio))
        }else alert('Por favor escriba una opción existente')
    }
    
    pedirDatosReserva()
    
    console.log(userReserva) 


/* BOTON DE RESERVAR TURNO */

let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault ();  
    console.log("Agendado");
    alert("LISTO!");
}


