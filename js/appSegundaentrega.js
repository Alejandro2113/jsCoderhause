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
-TEST
*/

alert(
  "Programa para ordenar pupusas \n Aqui podes pedir por persona\n estas listo para iniciar?"
);

let personas = parseInt(prompt("Cuantas personas van a ordenar?"));

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

//Depurado usando la funcion ya establecida
if (personas <= 0 || isNaN(personas) || personas >= 15) {
  recarga();
} else if (personas >= 16) {
  alert(
    "Tu pedido es muy grande, porfavor contactanos al telefono para asegurar tu orden"
  );
}

let pupusas = [0, 0, 0, 0, 0];

//Aqui la funcion que te deja seleccionar y lo guarde
function pupas() {
  let revueltas = parseInt(
    prompt("Cuantas revueltas quiere la perosna " + i + " ?.")
  );
  let frijol = parseInt(
    prompt("Cuantas de frijol y queso quiere la perosna " + i + " ?.")
  );
  let campesina = parseInt(
    prompt("Cuantas campesinas quiere la perosna " + i + " ?.")
  );
  let chicharon = parseInt(
    prompt("Cuantas chicharon quiere la perosna " + i + " ?.")
  );
  let vegetariana = parseInt(
    prompt("Cuantas vegetarianas quiere la perosna " + i + " ?.")
  );

  //Depurado usando la funcion ya establecida y limitando a 10 por tipo de pupusa.
  if (revueltas < 0 || isNaN(revueltas) || revueltas >= 10) {
    recarga();
  }
  if (frijol < 0 || isNaN(frijol) || frijol >= 10) {
    recarga();
  }
  if (campesina < 0 || isNaN(campesina) || campesina >= 10) {
    recarga();
  }
  if (chicharon < 0 || isNaN(chicharon) || chicharon >= 10) {
    recarga();
  }
  if (vegetariana < 0 || isNaN(vegetariana) || vegetariana >= 10) {
    recarga();
  }

  let pupas = [revueltas, frijol, campesina, chicharon, vegetariana];

  //sumas use logica de sumas acumuladas (se que use objetos pero queria un orden en una base)
  /*pupusas.revueltas = pupas.revueltas + pupusas.revueltas;
  pupusas.frijol = pupas.frijol + pupusas.frijol;
  pupusas.campesina = pupas.campesina + pupusas.campesina;
  pupusas.chicharon = pupas.chicharon + pupusas.chicharon;
  pupusas.vegetariana = pupas.vegetariana + pupusas.vegetariana;*/

  //LO MODIFIQUE CON UN ARRAY ARRIBA ESTA EL CODIGO ANTERIOR.
  for (n = 0; n < 5; n++) {
    pupusas[n] = pupas[n] + pupusas[n];
  }
  console.log(pupas);
  console.log(pupusas);

  //return pupas;
}

alert(
  "Actualmente el restaurante te ofrece 5 opciones de exquisitas pupusas.\n\n 1- Revueltas (Queso, frijoles, chicharon, hongos).\n 2- La queso (Queso y loroco).\n 3- Campesina (Queso, frijol).\n 4- La caperusita (Chicharron, queso).\n 5- La vegetariana (Espinaca, hongos, mora, ajo)."
);

//Ciclo para numero de personas (15 maximo establecido previamnete en linea 33)
for (i = 1; i <= personas; i++) {
  alert("¿Que pupusas quiere la persona " + i + "?.");
  pupas();
  //Pirmer valor para la suma
}

alert(
  "El resumen de tu pedido es:\n" +
    `${pupusas[0]} - Pupusas Revueltas\n` +
    `${pupusas[1]} - Pupusas La queso\n` +
    `${pupusas[2]} - Pupusas Campesina\n` +
    `${pupusas[3]} - Pupusas La caperusita\n` +
    `${pupusas[4]} - Pupusas La vegetariana\n`
);

//alert("Tu orden ya esta en la plancha, espero lo disfrutes =)");

//-----------------------------------------------------------------------------------------//

alert(
  "Tu orden ya esta en cocina, Porfavor termina de llenar\n los datos para el envio."
);

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

// Introcuciendo base de clientes

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

console.log("Base clientes= ", baseClientes);
console.log("Numero de clientes= ", baseClientes.length);

function crearCliente() {
  let nombre = prompt("Escribe un nombre y un apellido");
  let edad = parseInt(prompt("Que edad tienes?"));
  let telefono = parseInt(
    prompt("Escribe tu numero de telefono para contactarnos")
  );
  let direccion = prompt("Escribe tu direccion de envio");
  let alergias = prompt("Eres alergico en alguna sustancia?");

  const clienteNuevo = new MiCliente(
    baseClientes.length + 1,
    telefono,
    nombre.toUpperCase(),
    edad,
    direccion.toLowerCase(),
    alergias.toLowerCase()
  );

  console.log("cliente nuevo", clienteNuevo);
  console.log("id de cliente ", clienteNuevo.idCliente);

  let envio = confirm(
    `Tu nombre es: ${clienteNuevo.nombre} \n` +
      `Tu direccion es: ${clienteNuevo.direccion}\n` +
      `Deseas que te enviemos a esta dirección?`
  );

  if (envio) {
    //LO REGISTRO EN LA BASE DE DATOS
    baseClientes.push(clienteNuevo);

    clienteFinal = clienteNuevo.nombre;
    direccionFinal = clienteNuevo.direccion;

    console.log("Base clientes= ", baseClientes);
    console.log("Numero de clientes= ", baseClientes.length);
    alert("Tu orden esta en la plancha");
  } else {
    alert("Ingresa de nuevo tus datos de envio");
    crearCliente();
  }
}

function buscarClientes() {
  let telefonoBuscado = parseInt(
    prompt("Escribe tu numero de telefono para buscarte en la base de clientes")
  );
  console.log("Tu numero de telefono es: ", telefonoBuscado);
  let buscarCliente = baseClientes.find(
    (item) => item.telefono === telefonoBuscado
  );

  console.log(buscarCliente);

  let clienteBuscado = prompt(
    "Escribe el nombre que registraste"
  ).toUpperCase();

  if (buscarCliente != undefined && buscarCliente.nombre === clienteBuscado) {
    console.log("Tu nombre es ", buscarCliente.nombre);
    console.log("Tus datos son: ", buscarCliente);

    clienteFinal = buscarCliente.nombre;
    direccionFinal = buscarCliente.direccion;

    let envio = confirm(
      `Tu nombre es: ${buscarCliente.nombre} \n` +
        `Tu direccion es: ${buscarCliente.direccion}\n` +
        `Deseas que te enviemos a esta dirección?`
    );
    if (envio) {
      alert("Tu orden esta en la plancha");
    } else {
      alert("Ingresa de nuevo tus datos de envio");
      crearCliente();
    }
  } else {
    let nuevabusqueda = confirm("Los datos no coinciden, deseas registrarte?");
    if (nuevabusqueda) {
      crearCliente();
    } else {
      alert(
        "Necesitamos tus datos para el pedido, por favor ingresa de nuevo tus datos"
      );
      crearCliente;
    }
  }
}

let cliente = confirm(
  "Eres cliente registrado? (pulsa aceptar)\n, o deseas registrarte? (pulsa cancelar)",
  "Si ya lo estoy",
  "NO LO ESTOY"
);

if (cliente) {
  crearCliente();
} else {
  buscarClientes();
}

let TotalPupas = pupusas.reduce((a, b) => a + b, 0);
let PrecioPupusas = [
  pupusas[0] * 1.0,
  pupusas[1] * 1.25,
  pupusas[2] * 1.15,
  pupusas[3] * 1.2,
  pupusas[4] * 0.85,
];
let TotalPrecio = PrecioPupusas.reduce((a, b) => a + b, 0);

//DOM---- PARA MOSTRAR EL PEDIDO Y LOS DATOS DE ENVIO.
//id="pedidos"

const recibofinal = document.getElementById("pedidos");
const nombreRecibo = document.createElement("h3");
nombreRecibo.innerText = "DETALLES DE TU ORDEN";
const horaPedido = document.createElement("p");
horaPedido.innerText = `Hora del pedido:\n${Date()}`;
const nombreCliente = document.createElement("p");
nombreCliente.innerText = `Orde a nombre de: ${clienteFinal}`;
const direccionRecibo = document.createElement("p");
direccionRecibo.innerText = `Tu direccion es: ${direccionFinal}`;
const resumenPupusas = document.createElement("p");
resumenPupusas.innerText =
  "El resumen de tu pedido es:\n\n" +
  `${pupusas[0]} - Pupusas Revueltas\t - (1.00)\t - $${(
    pupusas[0] * 1.0
  ).toFixed(2)}\n` +
  `${pupusas[1]} - Pupusas La queso\t - (1.25)\t - $${(
    pupusas[1] * 1.25
  ).toFixed(2)}\n` +
  `${pupusas[2]} - Pupusas Campesina\t - (1.15)\t - $${(
    pupusas[2] * 1.15
  ).toFixed(2)}\n` +
  `${pupusas[3]} - Pupusas La caperusita\t - (1.20)\t - $${(
    pupusas[3] * 1.2
  ).toFixed(2)}\n` +
  `${pupusas[4]} - Pupusas La vegetariana\t - (0.85)\t - $${(
    pupusas[4] * 0.85
  ).toFixed(2)}\n 
    En total son ${TotalPupas} Pupusas
    Cantidad a pagar = $ ${TotalPrecio.toFixed(2)}`;

recibofinal.appendChild(nombreRecibo);
recibofinal.appendChild(horaPedido);
recibofinal.appendChild(nombreCliente);
recibofinal.appendChild(direccionRecibo);
recibofinal.appendChild(resumenPupusas);
divReibos.appendChild(recibofinal);
