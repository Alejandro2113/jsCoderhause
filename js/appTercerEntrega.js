/*Orden de pupusas (Me costo encontrat otro ejemplo) ver 2.3.0.
Alumno= Moises Alejandro Gonzalez Moran.
Comision CODERHAUSE javascrit (No "JAVA" sino me funean) #54005.
Tutoría a cargo de Marcelo Furlong.
*/

/* DEJO CLAROS MIS OBJETIVOS PARA TRAZAR UNA META Y DEFINIR PUNTOS A TOCAR EN ESTA TERCER
PREENTREGA

*OBJETIVOS DE SEGUNDA ENTREGA

//OBJETIVO PRIMARIO//
- AGREGAR UN RECIBO EN DOM.
- CREAR EVENTOS PARA QUITAR LOS PROMP.
- MEJORAR LA BASE DE USUARIOS.
- AGREGAR BOTONES PARA INGRESAR CLIENTE, O PARA BUSCAR CLIENTE Y SUS DATOS, (BUSCAR POR NUMERO DE TELEFONO Y NOMBRE).
- ALMACENAR EN LOCAL STORAGE LA ORDEN Y EL CLINETE.

*/

//Funcion para depurando de valores !logicos
function recarga() {
  let entrada = confirm(
    "Valores invalidos!!!\nTipos de error.\n\nTienes que ingresar cuantas personas (15 personas maximo).\nOrdenaste un numero negativo\nQuieres empezar de nuevo?"
  );

  if (entrada) {
    location.reload();
    throw new Error(
      "Numero de personas Mayor al esperado, deteniendo el script"
    );
  } else {
    alert("Un gusto atenderte, vuelve pronto");
    throw new Error(
      "Numero de personas Mayor al esperado, deteniendo el script"
    );
  }
}

let pupusas = [0, 0, 0, 0, 0];
let pupas = [0, 0, 0, 0, 0];

//FUNCION PARA CORREGIR LOS DATOS INGRESADOS EN LA ORDEN INICIAL DE LA CANTIDAD DE PUPUSAS

// INGRESANDO VALORES CON EVENTOS.

let revueltas = document.getElementById("rev");
revueltas.addEventListener("input", () => console.log(revueltas.value));
let queso = document.getElementById('fri');
queso.addEventListener("input", () => console.log(queso.value));
let campesina = document.getElementById('camp');
campesina.addEventListener("input", () => console.log(campesina.value));
let chicharon = document.getElementById('chich');
chicharon.addEventListener("input", () => console.log(chicharon.value));
let vegetariana = document.getElementById('vege');
vegetariana.addEventListener("input", () => console.log(vegetariana.value));


let botonPupusas = document.getElementById("pedidoPupusas");
botonPupusas.onclick = () => {
    pupas[0]=parseInt(revueltas.value);
    pupas[1]=parseInt(queso.value);
    pupas[2]=parseInt(campesina.value);
    pupas[3]=parseInt(chicharon.value);
    pupas[4]=parseInt(vegetariana.value);
    let TotalPupas = pupas.reduce((a, b) => a + b, 0);
    let PrecioPupas = [
    pupas[0] * 1.0,
    pupas[1] * 1.25,
    pupas[2] * 1.15,
    pupas[3] * 1.2,
    pupas[4] * 0.85,
    ];
    let TotalPrecio = PrecioPupas.reduce((a, b) => a + b, 0);
    
    console.log(TotalPupas);
    console.log(TotalPrecio);
};

//DEPURANDO VALORES PARA NO OBTENER NEGATIVOS
