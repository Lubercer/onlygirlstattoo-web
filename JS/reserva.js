
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
    {id:1, nombre: "microdermal", precio: 2000},
    {id:2, nombre: "daith", precio: 900},
    {id:3, nombre:"industrial",precio: 850},
    {id:4, nombre: "tragus", precio: 800},
    {id:5, nombre: "labret", precio: 750}
];
/* local Storage */
const productosGuardados = (clave, valor) => {localStorage.setItem(clave, valor)};

productosGuardados ("listaDePiercing", JSON.stringify(piercingsArray));

function mostrarInputs() {
    const nombreIngresado = document.getElementById ('nombreApellido').value;
    const select = document.getElementById('perforacion').value;
    const sucur = document.getElementById('sucursales').value;
    const horario = document.getElementById('horario').value;
    console.log(nombreIngresado);
    console.log(select);
    console.log(sucur);
    console.log(horario);
     }

     const datoaGuardados = (clave, valor) => {localStorage.setItem(clave, valor)};

     datoaGuardados ("datosDeTurnos", (mostrarInputs()));
     

