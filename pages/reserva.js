
/* productos */
let microdermal = 2000
let daith = 900
let industrial = 850
let tragus = 800
let labret = 750

/* Calcular productos + envio - 10% de descuento */
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const envio = x => + 750;

let descuento = microdermal*0.10 //10% de descuento

//                          

function Preciototal() {
    let preciopiercing = resta(suma(microdermal, envio(microdermal)), descuento);  
    console.log(preciopiercing);
}
Preciototal();