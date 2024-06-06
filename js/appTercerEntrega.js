/*Orden de pupas ver 2.4.0
Alumno= Moises Alejandro Gonzalez Moran.
Comision CODERHAUSE javascrit #54005.
Tutoría a cargo de MARCELO FURLONG.
Ponente: LUCAS GABRIEL RUIZ
*/

/* DEJO CLAROS MIS OBJETIVOS PARA TRAZAR UNA META Y DEFINIR PUNTOS A TOCAR EN ESTA TERCER
PREENTREGA

-----OBJETIVOS------

-AGREGAR LIBRERIAS SWEET ALERT Y TOSTIFY.
-USO DE ASINCRONIA Y PROMESAS CON UNA API USANDO UN FETCH || USAR UN DATA.JSON PARA EMULAR UN API
-BORRAR TODOS LOS CONSOLE.LOG !IMPORTANTE
-ELIMINAR TODOS LOS ALERT Y MODIFICARLOS A SWEET ALERT, ELIMINAR LOS PROMPT
-REVISAR EL ESTILO Y PULIR EL CSS

*/

//BASE DE CLIENTES

class baseCliente {
  constructor(idCliente, telefono, nombre, edad, direccion, alergias) {
    this.idCliente = idCliente;
    this.telefono = telefono;
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.alergias = alergias;
  }
}

console.log(localStorage.length);

if (localStorage.length < 4) {
  let baseCliente = [
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
      alergias: "chile",
    },
    {
      idCliente: 3,
      nombre: "JOSUE GONZALEZ",
      telefono: 61616060,
      edad: 23,
      direccion: "avenida siempre viva 122",
      alergias: "colorantes",
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
      alergias: "chicharon",
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
  console.log(baseCliente);

  baseClientes = baseCliente;
} else if (localStorage.length >= 4) {
  let baseCliente = JSON.parse(localStorage.getItem("baseClientes"));
  console.log(baseCliente);
  baseClientes = baseCliente;
}

console.log(baseClientes);
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

let pupas = [{}, {}, {}, {}, {}];

//FUNCION QUE REVISA SI EXISTE UN PEDIDO ANTERIOR
if (localStorage.length >= 2) {
  const pedidoInicial = document.getElementById("datosPedido");
  let revueltas = document.getElementById("rev");
  let queso = document.getElementById("fri");
  let campesina = document.getElementById("camp");
  let chicharon = document.getElementById("chich");
  let vegetariana = document.getElementById("vege");

  let pupas = JSON.parse(localStorage.getItem("pupas"));
  console.log(pupas);
  revueltas.value = pupas[0];
  queso.value = pupas[1];
  campesina.value = pupas[2];
  chicharon.value = pupas[3];
  vegetariana.value = pupas[4];
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

  //USANDO FUNSION SUPERIOR PARA EVALUAR LA SUMA DEL ARRAY.
  let TotalPrecio = PrecioPupas.reduce((a, b) => a + b, 0);

  //ALMACEN DE DATOS PARA NO PERDER EL PEDIDO
  localStorage.setItem("pupas", JSON.stringify(pupas));
  localStorage.setItem("TotalPupas", TotalPupas);
  localStorage.setItem("TotalPrecio", TotalPrecio.toFixed(2));

  console.log(pupas);
  console.log("TOTAL PUPUSAS = " + TotalPupas);
  console.log("$ " + TotalPrecio.toFixed(2));

  let clienteFinal = document.getElementById("nombre");
  let edadCliente = document.getElementById("age");
  let telefonoCleinte = document.getElementById("telefono");
  let direccionCliente = document.getElementById("direccion");
  let alergiaCliente = document.getElementById("alergia");

  console.log("Cliente= " + clienteFinal.value);
  console.log("Edad= " + edadCliente.value);
  console.log("Telefono= " + telefonoCleinte.value);
  console.log("Direccion= " + direccionCliente.value);
  console.log("Alergias= " + alergiaCliente.value);

  clienteNuevo = new MiCliente(
    baseClientes.length + 1,
    telefonoCleinte.value,
    clienteFinal.value,
    edadCliente.value,
    direccionCliente.value,
    alergiaCliente.value
  );

  if (
    pupas[0] == 0 &&
    pupas[1] == 0 &&
    pupas[2] == 0 &&
    pupas[3] == 0 &&
    pupas[4] == 0
  ) {
    //DEJARE SOLO ESTE ALERT PARA PODER ADVERTIR UNA VEZ QUE NO SE INGRESARON DATOS
    localStorage.clear();
    // alert(
    //   "Porfavor, ingresa cuantas pupas y luego tu direccion antes de pulsar el boton\npara enviar tu orden"
    // );
    Swal.fire({
      icon: "error",
      title: "No ingresaste ningun valor \n Necesitamos tu orden y detalles de envio.",
      text: "Porfavor, ingresa cuantas pupas y luego tu direccion antes de pulsar el boton\npara enviar tu orden",
      timer:6000,
      //asi de lento porque muchos leen super lento pero se que es excesivo.
    }).then(() => {
      location.reload();
    });
    //location.reload();
  }
  botonPupusas.remove();

  if (localStorage.length >= 3) {
    const divCliente = document.getElementById("cliente");
    const divContenedor = document.getElementById("datosPedido");

    let botonAlmacenarCliente = document.createElement("button");

    let buscartelefono = baseClientes.find(
      (item) => item.telefono === telefonoCleinte.value
    );

    if (
      buscartelefono === undefined &&
      direccionCliente.value != "Recojer en tienda"
    ) {
      botonAlmacenarCliente.setAttribute("class", "botonDireccion");
      botonAlmacenarCliente.setAttribute("id", "botonDireccion");
      botonAlmacenarCliente.textContent = "Almacenar mis datos";
    }
    botonAlmacenarCliente.onclick = () => {
      //PUSHEAR LOS DAROS A LA BASE DE DATOS DEL CLIENTES Y ALMACENAR
      //Agregar toastify
      baseClientes.push(clienteNuevo);
      localStorage.setItem("baseClientes", JSON.stringify(baseClientes));
      botonAlmacenarCliente.remove();
      console.log(baseClientes);

    };
    divCliente.appendChild(botonAlmacenarCliente);

    let generarPedido = document.createElement("button");
    generarPedido.setAttribute("class", "botonDireccion");
    generarPedido.setAttribute("id", "botonDireccion");
    generarPedido.textContent = "Generar Pedido y Recibo";
    divCliente.appendChild(generarPedido);

    //INGRESAR LOS DATOS DEL CLIENTE

    generarPedido.onclick = () => {
      //LIMPIANDO DATOS
      divCliente.removeChild(generarPedido);
      divContenedor.innerHTML = "";


      Swal.fire({
        title: "Tu pedido esta listo",
        text: "Tu orden ya esta en la plancha!!!",
        icon: "success",
        timer:2000,
      }).then(()=>{

        const divRecibos = document.createElement("div");
        divRecibos.setAttribute("id", "reciboFinal");
        divRecibos.setAttribute("class", "recibo");
        const recibofinal = document.createElement("div");
        recibofinal.setAttribute("id", "reciboFinal");
        const nombreRecibo = document.createElement("h3");
        nombreRecibo.innerText = `TU PEDIDO YA ESTA EN LA PLANCHA
  
        DETALLES DE TU ORDEN`;
        const horaPedido = document.createElement("p");
        horaPedido.innerText = `Hora del pedido:\n${Date()}`;
        const nombreCliente = document.createElement("p");
        nombreCliente.innerText = `Orde a nombre de:\n${clienteFinal.value}`;
        const direccionRecibo = document.createElement("p");
        direccionRecibo.innerText = `Tu direccion es:\n${direccionCliente.value}`;
        const resumenPupusas = document.createElement("p");
        resumenPupusas.innerText =
          "El resumen de tu pedido es:\n\n" +
          `${pupas[0]} - Pupusas Revueltas\t - (0.90)\t - $ ${(
            pupas[0] * 0.9
          ).toFixed(2)}\n` +
          `${pupas[1]} - Pupusas La queso\t - (0.95)\t - $ ${(
            pupas[1] * 0.95
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
        regresar.textContent = "VOLVER ATRAS Y ORDENAR DE NUEVO";
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
  
        let divImagenPlancha = document.getElementById("imgPupusas");
        let imagenPupusas = document.createElement("img");
        imagenPupusas.src = ".././images/pupusa2.jpeg";
        
        setTimeout(()=> {
          
          //No se si esto no es buena practica, pero lo quise hacer para saber si se puede y jugar un poco con el setAttibute
          //y funciono :).
          imagenPupusas.setAttribute(
            "style",
            "width: 60dvw; height: 50dvw; border-radius: 15px;"
          );
    
          divImagenPlancha.appendChild(imagenPupusas);

        },1500);
      });

    };
  }
};
