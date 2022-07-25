document.getElementById("formulario").addEventListener("submit", crear);

function crear(e) {
    cliente = document.getElementById("nombre-tabla").value   
    fecha = document.getElementById ("fecha-tabla").value
    perfo = document.getElementById ("perfo-tabla").value
    sucur = document.getElementById ("sucur-tabla").value
    horario = document.getElementById ("horario-tabla").value
    precio = document.getElementById ("precio").value
    let libro = {
        cliente,
        fecha,
        perfo,
        sucur,
        horario,
        precio
    }
    if (localStorage.getItem("Libros")=== null){
        let libros =[] 
        libros.push (libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }else{
        let libros = JSON.parse(localStorage.getItem("Libros"))
        libros.push(libro)
        localStorage.setItem("Libros", JSON.stringify(libros))
    }
    mostrar ();
    document.getElementById ("formulario").reset();
    console.log("Libro guardado correctamente");
    e.preventDeFault()
}
    function mostrar() {
    let libros = JSON.parse (localStorage.getItem("Libros"));
    document.getElementById("tbody").innerHTML = ""
    for (let i=0; i < libros.length; i++) {
        let cliente= libros[i].cliente;
        let fecha= libros[i].fecha;
        let perfo= libros[i].perfo;
        let sucur= libros[i].sucur;
        let horario= libros[i].horario;
        let precio= libros[i].precio; 
        document.getElementById("tbody").innerHTML +=
     ` <tr>
            <td>${cliente}</td>
            <td>${fecha}</td>
            <td>${perfo}</td>
            <td>${sucur}</td>
            <td>${horario}</td>
            <td>${precio}</td>
            <td><button onlick="eliminar('${cliente}')" class="btn btn-danger">Eliminar</button></td>
            <td><button onlick="editar('${cliente}')" class="btn btn-success">Editar</button></td>
        </tr>`
    } 
}
function editar(cliente){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    for(let i=0; i<libros.length; i++){
        if(libros[i].cliente === cliente){
            document.getElementById("body").innerHTML = ` <div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2> Agregar nuevo libro </h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newnombre-tabla" class="form-control" placeholder="${libros[i].cliente}">
                            <div class="form-group">
                                <input type="date" id="newfecha-tabla" class="form-control" placeholder="${libros[i].fecha}">
                            </div>
                            <div class="form-group">
                                <input type="text" id="newperfo-tabla" class="form-control" placeholder="${libros[i].perfo}">
                            </div>
                            <div class="form-group">
                                <input type="text" id="newsucur-tabla" class="form-control" placeholder="${libros[i].sucur}">
                            </div>
                            <div class="form-group">
                                <input type="time" id="newhorario-tabla" class="form-control" placeholder="${libros[i].horario}">
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form-control" placeholder="${libros[i].precio}">
                            </div>
                        </form>
                        <button class="btn btn-success" onlick="actualizar('${i}')">Actualizar</button>
                        <button class="btn btn-primary" onlick="vistaPrincipal()"> Cancelar </button>
                    </div>
                </div>
            </div>
            `
        }
    }
}
function actualizar(i){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    libros [i].cliente = document.getElementById("newnombre-tabla").value;
    libros [i].fecha = document.getElementById("newfecha-tabla").value;
    libros [i].perfo = document.getElementById("newsucur-tabla").value;
    libros [i].sucur = document.getElementById("newhorario-tabla").value;
    libros [i].precio = document.getElementById("newprecio").value;
    localStorage.setItem("Libros", JSON.stringify(libros));
    vistaPrincipal ()
}


function eliminar(cliente){
    let libros = JSON.parse(localStorage.getItem("Libros"));
    for(let i=0; i<libros.length; i++){
        if(libros[i].cliente === cliente){
            libros.splice(i,i);
        }
    }
    localStorage.setItem("Libros",JSON.stringify(libros));
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
                        <button class="btn btn-success" onlick="actualizar('${i}')">Actualizar</button>
                    <button class="btn btn-primary" onlick="vistaPrincipal()"> Cancelar </button>
                    </form>
                </div>
            </div>`
}

mostrar ();


  