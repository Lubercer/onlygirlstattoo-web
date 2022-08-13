const lista = document.getElementById ("lista");
const traerProductos = async () => {
    const resp = await fetch ("../data.json");
    const data = await resp.json ();
    data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = ` 
        <tr id:"productosPantalla">
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `
        lista.append(li);
    });
}
traerProductos ();
document.getElementById("formulario").addEventListener("submit", crear);

function crear(e){
    cliente = document.getElementById("nombre-tabla").value   
    fecha = document.getElementById ("fecha-tabla").value
    perfo = document.getElementById ("perfo-tabla").value
    sucur = document.getElementById ("sucur-tabla").value
    horario = document.getElementById ("horario-tabla").value
    precio = document.getElementById ("precio").value
    let turno = {
        cliente,
        fecha,
        perfo,
        sucur,
        horario,
        precio
    }
    if (localStorage.getItem("Turnos")=== null){
        let turnos =[] 
        turnos.push (turno)
        localStorage.setItem("Turnos", JSON.stringify(turnos))
    }else{
        let turnos = JSON.parse(localStorage.getItem("Turnos"))
        turnos.push(turno)
        localStorage.setItem("Turnos", JSON.stringify(turnos))
    }
    mostrar ();
    document.getElementById("formulario").reset();
    console.log("Turno guardado correctamente");
    e.preventDefault();
}
    function mostrar() {
    let turnos = JSON.parse (localStorage.getItem("Turnos"));
    document.getElementById("tbody").innerHTML = ""
    for (let i=0; i < turnos.length; i++) {
        let cliente= turnos[i].cliente;
        let fecha= turnos[i].fecha;
        let perfo= turnos[i].perfo;
        let sucur= turnos[i].sucur;
        let horario= turnos[i].horario;
        let precio= turnos[i].precio; 
        document.getElementById("tbody").innerHTML +=
     ` <tr>
            <td>${cliente}</td>
            <td>${fecha}</td>
            <td>${perfo}</td>
            <td>${sucur}</td>
            <td>${horario}</td>
            <td>${precio}</td>
             <td><button onclick="eliminar('${cliente}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onclick="editar('${cliente}')" class="btn btn-success">Editar</button></td> 
        </tr>`
    } 
}
mostrar()

function editar(cliente){
    let turnos = JSON.parse(localStorage.getItem("Turnos"));
    for(let i=0; i<turnos.length; i++){
        if(turnos[i].cliente === cliente){
            document.getElementById("body").innerHTML = ` <div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2 id="titulo2"> Agregar nuevo turno </h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newnombre-tabla" class="form-control" placeholder="${turnos[i].cliente}">
                            <div class="form-group">
                                <input type="date" id="newfecha-tabla" class="form-control" placeholder="${turnos[i].fecha}">
                            </div>
                            <div class="form-group">
                                <input type="text" id="newperfo-tabla" class="form-control" placeholder="${turnos[i].perfo}">
                            </div>
                            <div class="form-group">
                                <input type="text" id="newsucur-tabla" class="form-control" placeholder="${turnos[i].sucur}">
                            </div>
                            <div class="form-group">
                                <input type="time" id="newhorario-tabla" class="form-control" placeholder="${turnos[i].horario}">
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form-control" placeholder="${turnos[i].precio}">
                            </div>
                        </form>
                        <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                        <button class="btn btn-primary" onclick="vistaPrincipal()"> Cancelar </button>
                    </div>
                </div>
            </div>`
        }
    }
}
function actualizar(i){
    let turnos = JSON.parse(localStorage.getItem("Turnos"));
    turnos[i].cliente = document.getElementById("newnombre-tabla").value;
    turnos[i].fecha = document.getElementById("newfecha-tabla").value;
    turnos[i].perfo = document.getElementById("newsucur-tabla").value;
    turnos[i].sucur = document.getElementById("newhorario-tabla").value;
    turnos[i].precio = document.getElementById("newprecio").value;
    localStorage.setItem("Turnos", JSON.stringify(turnos));
    vistaPrincipal ()
}
function eliminar(cliente){
    let turnos = JSON.parse(localStorage.getItem("Turnos"));
    for(let i=0; i<turnos.length; i++){
        if(turnos[i].cliente === cliente){
            turnos.splice(i,1);
        }
    }
    localStorage.setItem("Turnos",JSON.stringify(turnos));
    mostrar ();
}
function vistaPrincipal(){
    document.getElementById("body").innerHTML = `   <div class="container mt-4" id="body">
    <div class="row2">
        <div class="col-md-5">
            <div class="card">
                <div class="card-body">
                    <form id="formulario">
                        <div class="form-group">
                            <input type="text" id="nombre-tabla" class="form-control" placeholder="Cliente">
                        </div>
                        <div class="form-group">
                            <input type="date" id="fecha-tabla" class="form-control" placeholder="Ingresar Fecha">
                        </div>
                        <div class="form-group">
                            <input type="text" id="perfo-tabla" class="form-control" placeholder="Ingresar Perforación">
                        </div>
                      
                        <div class="form-group">
                            <input type="text" id="sucur-tabla" class="form-control" placeholder="Ingresar Sucursal">
                        </div>
                        <div class="form-group">
                            <input type="time" id="horario-tabla" class="form-control" placeholder="Horario">
                        </div>
                        <div class="form-group">
                            <input type="number" id="precio" class="form-control" placeholder="Ingresar precio">
                        </div>
                        <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                    <button class="btn btn-primary" onclick="vistaPrincipal()"> Cancelar </button>
                    </form>
                </div>
            </div>`
    mostrar ();
}
mostrar ();


  