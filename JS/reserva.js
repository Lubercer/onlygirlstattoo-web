
class Reserva{
    constructor(nombre,sucursal,fecha){
        this.nombre = nombre
        this.sucursal = sucursal
        this.fecha = fecha
    }
}
const userReserva = []

// arrays de los diferentes productos
const piercingsArray = [
    {id:1, nombre: "microdermal", precio: 2000},
    {id:2, nombre: "daith", precio: 900},
    {id:3, nombre:"industrial",precio: 850},
    {id:4, nombre: "tragus", precio: 800},
    {id:5, nombre: "labret", precio: 750}
];
/* local Storage */
const productosGuardados = (clave, valor) => {localStorage.setItem(clave, valor)};

productosGuardados ("listaDePiercing", JSON.stringify(piercingsArray));

/* Buscamos almacenar toda la informacion para generar un turno */
const turnos = [];

window.onload = cargarEventos;

function cargarEventos() {
  const validar =  document.getElementById("formulario");
  validar.addEventListener ("submit", mostrarDatos);  
 
}
/* Funcion para generar nuevos turnos */
function mostrarDatos(event) {
   
    const validar = event.target;
    event.preventDefault();
    const nombreIngresado = document.getElementById ('nombreApellido').value;
    const fecha = document.getElementById('fecha').value;
    const select = document.getElementById("perforacion").value;
    const sucur = document.getElementById('sucursales').value;
    const horario = document.getElementById('horario').value;
    const mostrarDatos = {nombre: nombreIngresado, fecha: fecha, perforacion: select, sucursal: sucur , horario: horario };
    turnos.push (mostrarDatos);
      swal.fire({
        title: '¡Turno agendado!',
        text: 'Recordatorio: Menores con tutor y DNI. Sin excepciones.',
        imageUrl: 'https://media2.giphy.com/media/xT5LMzEbdHnbs0V1cs/giphy.gif',
        imageWidth:400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    /* local Storage de turnos*/
    const turnosGuardados = (clave, valor) => {localStorage.setItem(clave, valor)};
    turnosGuardados ("listaDeTurnos", JSON.stringify(turnos));
}
