
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

let descuento = microdermal*0.10 //10% de descuento//  
 
function precioTotal() {
    let preciopiercing = resta(suma(microdermal, envio(microdermal)), descuento);  
    console.log(preciopiercing);
    alert ("Bienvenidx a Only Girls Tattoo");
let entrada = prompt ("Seleccione 1 para saber el valor de nuestro microdermal") 
let aceptar = confirm ("¿Desea saber el precio con envio?")
if (aceptar == true) {
    alert ("Microdermal de Titanio (10% de descuento) + envio: "+ preciopiercing);}
    else { alert ("Retirando por nuestro local + 10% de descuento: $1800")

    }
}
precioTotal();                  




