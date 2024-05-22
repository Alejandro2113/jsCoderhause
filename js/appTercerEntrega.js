/*Orden de pupas (Me costo encontrat otro ejemplo) ver 2.3.0.
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
  }

  let TotalPupas = pupas.reduce((a, b) => a + b, 0);

  let PrecioPupas = [
    pupas[0] * 0.9,
    pupas[1] * 0.95,
    pupas[2] * 1.15,
    pupas[3] * 1.2,
    pupas[4] * 0.85,
  ];

  let TotalPrecio = PrecioPupas.reduce((a, b) => a + b, 0);

  //ALMACEN DE DATOS PARA NO PERDER EL PEDIDO
  localStorage.setItem("revueltas", pupas[0]);
  localStorage.setItem("queso", pupas[1]);
  localStorage.setItem("campesina", pupas[2]);
  localStorage.setItem("chicharon", pupas[3]);
  localStorage.setItem("vegetariana", pupas[4]);
  localStorage.setItem("TotalPupas", TotalPupas);
  localStorage.setItem("TotalPrecio", TotalPrecio.toFixed(2));

  console.log(pupas);
  console.log("TOTAL PUPUSAS = " + TotalPupas);
  console.log("$ " + TotalPrecio.toFixed(2));

  if (
    pupas[0] == 0 &&
    pupas[1] == 0 &&
    pupas[2] == 0 &&
    pupas[3] == 0 &&
    pupas[4] == 0
  ) {
    //DEJARE SOLO ESTE ALERT PARA PODER ADVERTIR UNA VEZ QUE NO SE INGRESARON DATOS
    localStorage.clear();
    alert(
      "Porfavor, ingresa cuantas pupas y luego pulsa en enviar para poder tomar tu orden"
    );
    location.reload();
  }

  let clienteFinal = document.getElementById("nombre");
  let edadCliente = document.getElementById("age");
  let telefonoCleinte = document.getElementById("telefono");
  let direccionCliente = document.getElementById("direccion");
  let alergiaCliente = document.getElementById("alergia");

  console.log("Cliente= "+clienteFinal.value);
  console.log("Edad= "+edadCliente.value);
  console.log("Telefono= "+telefonoCleinte.value);
  console.log("Direccion= "+direccionCliente.value);
  console.log("Alergias= "+alergiaCliente.value);

  clienteNuevo = new MiCliente (baseClientes.length+1,telefonoCleinte.value,clienteFinal.value,edadCliente.value,direccionCliente.value,alergiaCliente.value);

  botonPupusas.remove();

  if (localStorage.length >= 7) {
    const divCliente = document.getElementById("cliente");
    const divContenedor = document.getElementById("datosPedido");

    let botonAlmacenarCliente = document.createElement("button");
    botonAlmacenarCliente.setAttribute("class", "botonDireccion");
    botonAlmacenarCliente.setAttribute("id", "botonDireccion");
    botonAlmacenarCliente.textContent = "Almacenar mis datos";
    botonAlmacenarCliente.onclick = () => {
      //PUSHEAR LOS DAROS A LA BASE DE DATOS DEL CLIENTES Y ALMACENAR
      baseClientes.push(clienteNuevo);

      botonAlmacenarCliente.remove();
    };
    divCliente.appendChild(botonAlmacenarCliente);

    let generarPedido = document.createElement("button");
    generarPedido.setAttribute("class", "botonDireccion");
    generarPedido.setAttribute("id", "botonDireccion");
    generarPedido.textContent = "Generar Recibo";
    divCliente.appendChild(generarPedido);

    //INGRESAR LOS DATOS DEL CLIENTE

    generarPedido.onclick = () => {
      //LIMPIANDO DATOS
      divCliente.removeChild(generarPedido);
      divContenedor.innerHTML = "";

      const divRecibos = document.createElement("div");
      divRecibos.setAttribute("id", "reciboFinal");
      divRecibos.setAttribute("class", "recibo");
      const recibofinal = document.createElement("div");
      recibofinal.setAttribute("id", "reciboFinal");
      const nombreRecibo = document.createElement("h3");
      nombreRecibo.innerText = "DETALLES DE TU ORDEN";
      const horaPedido = document.createElement("p");
      horaPedido.innerText = `Hora del pedido:\n${Date()}`;
      const nombreCliente = document.createElement("p");
      nombreCliente.innerText = `Orde a nombre de:\n${clienteFinal.value}`;
      const direccionRecibo = document.createElement("p");
      direccionRecibo.innerText = `Tu direccion es:\n${direccionCliente.value}`;
      const resumenPupusas = document.createElement("p");
      resumenPupusas.innerText =
        "El resumen de tu pedido es:\n\n" +
        `${pupas[0]} - Pupusas Revueltas\t - (1.00)\t - $ ${(
          pupas[0] * 1.0
        ).toFixed(2)}\n` +
        `${pupas[1]} - Pupusas La queso\t - (1.25)\t - $ ${(
          pupas[1] * 1.25
        ).toFixed(2)}\n` +
        `${pupas[2]} - Pupusas Campesina\t - (1.15)\t - $ ${(
          pupas[2] * 1.15
        ).toFixed(2)}\n` +
        `${pupas[3]} - Pupusas La Caperusita\t - (1.20)\t - $ ${(
          pupas[3] * 1.2
        ).toFixed(2)}\n` +
        `${pupas[4]} - Pupusas La vegetariana\t - (0.85)\t - $ ${(
          pupas[4] * 0.85
        ).toFixed(2)}\n 
          En total son ${TotalPupas} Pupusas
          Cantidad a pagar = $ ${TotalPrecio.toFixed(2)}`;

      let regresar = document.createElement("button");
      regresar.setAttribute("class", "botonDireccion");
      regresar.setAttribute("id", "botonDireccion");
      regresar.textContent = "Revisar Pedido";
      regresar.onclick = () => {
        location.reload();
      };

      recibofinal.appendChild(nombreRecibo);
      recibofinal.appendChild(horaPedido);
      recibofinal.appendChild(nombreCliente);
      recibofinal.appendChild(direccionRecibo);
      recibofinal.appendChild(resumenPupusas);
      recibofinal.appendChild(regresar);
      divRecibos.appendChild(recibofinal);
      divContenedor.appendChild(divRecibos);

      divImagen = document.createElement("div");
      divImagen.setAttribute("class", "imgPupusas");
    };

    //divContenedor.appendChild(generarPedido);
    //divDireccion.appendChild(divContenedor);
    //direccionEnvio.appendChild(divDireccion);
  }
};
