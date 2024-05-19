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
- ALMACENAR EN LOCAL STORAGE LA ORDEN Y EL CLINETE..

TUVE UN PROBLEMA CON MI PC, ASI QUE RECUPERE DE GIT EL ULTIMO, HICE UN PUSH CON UNA PC NUEVA, LUEGO LOGRE TENER 
CONFLICTOS EN GIT POR TENER 2 CARGAS PUSHEADAS EN EL MAIN DISTINTAS, ASI QUE RECUPERE ESTE ARCHIVO A LA ÚLTIMA VERSIÓN
NUEVA PARA CONTINUAR EL TRABAJO, DEJO COMO EVIDENCIA ESTO PORQUE FUE EMOCIONANTE PODERLO RECUPERAR CON UN POCO DE 
ESFUERZO (5MIN) Y QUIERO QUE QUEDE A POSTERIDAD.
*/

//BASE DE CLIENTES

const baseClientes = [
  {
    idCliente: 1,
    nombre: "EDUARDO GONZALEZ",
    telefono: 61616565,
    edad: 21,
    direccion: "avenida siempre viva 120",
    alergias: "pimienta",
  },
  {
    idCliente: 2,
    nombre: "jULIO MEDINA",
    telefono: 61616566,
    edad: 22,
    direccion: "avenida siempre viva 121",
    alergias: "loroco",
  },
  {
    idCliente: 3,
    nombre: "JOSUE GONZALEZ",
    telefono: 61616060,
    edad: 23,
    direccion: "avenida siempre viva 122",
  },
  {
    idCliente: 4,
    nombre: "HOMERO SIMPSON",
    telefono: 70707878,
    edad: 34,
    direccion: "avenida siempre viva 123",
    alergias: "pimienta",
  },
  {
    idCliente: 5,
    nombre: "GABRIELA GONZALEZ",
    telefono: 61616000,
    edad: 27,
    direccion: "avenida siempre viva 124",
  },
  {
    idCliente: 6,
    nombre: "ALE",
    telefono: 78707870,
    edad: 30,
    direccion: "avenida siempre viva 125",
    alergias: "colorante rojo",
  },
];

class MiCliente {
  constructor(idCliente, telefono, nombre, edad, direccion, alergias) {
    this.idCliente = idCliente;
    this.telefono = telefono;
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.alergias = alergias;
  }
}

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

let pupas = [{}, {}, {}, {}, {}];


//FUNCION QUE REVISA SI EXISTE UN PEDIDO ANTERIOR
if (localStorage.length >= 5) {
  const pedidoInicial = document.getElementById("datosPedido");
  let revueltas = document.getElementById("rev");
  let queso = document.getElementById("fri");
  let campesina = document.getElementById("camp");
  let chicharon = document.getElementById("chich");
  let vegetariana = document.getElementById("vege");
  
  revueltas.value = Number(localStorage.getItem(`revueltas`));
  queso.value = Number(localStorage.getItem(`queso`));
  campesina.value = Number(localStorage.getItem(`campesina`));
  chicharon.value = Number(localStorage.getItem(`chicharon`));
  vegetariana.value = Number(localStorage.getItem(`vegetariana`));
}

// INGRESANDO VALORES CON EVENTOS.
let revueltas = document.getElementById("rev");
let queso = document.getElementById("fri");
let campesina = document.getElementById("camp");
let chicharon = document.getElementById("chich");
let vegetariana = document.getElementById("vege");

let botonPupusas = document.getElementById("pedidoPupusas");
botonPupusas.onclick = () => {
  //AL PRINCIPIO SOLO ESCUCHA UNA VEZ && LUEGO ESCUCHA CADA CAMBIO
  revueltas.addEventListener("input", () => console.log(revueltas.value));
  queso.addEventListener("input", () => console.log(queso.value));
  campesina.addEventListener("input", () => console.log(campesina.value));
  chicharon.addEventListener("input", () => console.log(chicharon.value));
  vegetariana.addEventListener("input", () => console.log(vegetariana.value));
  
  pupas[0] = parseInt(revueltas.value);
  pupas[1] = parseInt(queso.value);
  pupas[2] = parseInt(campesina.value);
  pupas[3] = parseInt(chicharon.value);
  pupas[4] = parseInt(vegetariana.value);
  
  //FUNCION PARA CORREGIR LOS DATOS INGRESADOS EN LA ORDEN INICIAL DE LA CANTIDAD DE PUPUSAS
  //DEPURANDO VALORES PARA NO OBTENER NaN
  for (n = 0; n < 5; n++) {
    if (isNaN(pupas[n])) {
      pupas[n] = 0;
    }
  };

  console.log(pupas);

  let TotalPupas = pupas.reduce((a, b) => a + b, 0);
  let PrecioPupas = [
    pupas[0] * 0.9,
    pupas[1] * 0.95,
    pupas[2] * 1.15,
    pupas[3] * 1.2,
    pupas[4] * 0.85,
  ];

  let TotalPrecio = PrecioPupas.reduce((a, b) => a + b, 0);

  console.log(TotalPupas);
  console.log(TotalPrecio.toFixed(2));

  //ALMACEN DE DATOS PARA NO PERDER EL PEDIDO
  localStorage.setItem("revueltas", pupas[0]);
  localStorage.setItem("queso", pupas[1]);
  localStorage.setItem("campesina", pupas[2]);
  localStorage.setItem("chicharon", pupas[3]);
  localStorage.setItem("vegetariana", pupas[4]);
};
