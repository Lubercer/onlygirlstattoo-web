
/* productos */
let productos =[
 {nombre: "microdermal", precio: 2000},
{nombre:"daith", precio: 900},
{nombre: "industrial",precio:850},
{nombre: "tragus", precio:800},
{nombre:"labret", precio:750},];

let asignarFiltro = prompt("Ingrese filtro (nombre o precio)");

if (asignarFiltro === "nombre") {
    let filtro = prompt("Ingrese el nombre que corresponde a la perforacion");
    let resultados = productos.filter ((elemento) => elemento.nombre.includes(filtro));
   console.log(resultados);
}
else if (asignarFiltro === "precio") {
    let filtro = parseInt (prompt("Ingrese el precio que corresponde a la perforacion"))
    let resultados = productos.filter ((elemento) => elemento.precio > filtro);
    console.log(resultados);
}




