/*Orden de pupusas (Me costo encontrat otro ejemplo) ver 2.1.0.
Alumno= Moises Alejandro Gonzalez Moran.
Comision CODERHAUSE javascrit (No "JAVA" sino me funean) #54005.
Tutoría a cargo de Marcelo Furlong.
*/

/* DEJO CLAROS MIS OBJETIVOS PARA TRAZAR UNA META Y DEFINIR PUNTOS A TOCAR EN ESTA SEGUNDA
PREENTREGA

*OBJETIVOS DE SEGUNDA ENTREGA

//OBJETIVO PRIMARIO//
- DESPUES DE ORDENAR PEDIR LOS DATOS DEL CLEINTE COMO LO SON:
    * ID CLIENTE
    * FECHA DE INGRESO A BASE
    * NOMBRE.
    * DIRECCION.
    * TELEFONO.
    * ALERGIAS ESPECIALES (PARA PREVENIR RIESGOS POR ALERJIAS).

ESTOS GUARDARLOS EN UN OBJETO Y PERMITIR INTERACTUAR CON EL EN EL FUTURO PARA HACER 
MODIFICACIONES A PETICION DEL CLIENTE.

//OBJETIVO SECUNDARIO (BONUS)//

INTEGRAR ESTOS RESULTADOS USANDO DOM EN apps.html

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

let pupusas = [
  (revueltas = 0),
  (frijol = 0),
  (campesina = 0),
  (chicharon = 0),
  (vegetariana = 0),
];

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

  return pupas;
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
  "Tu orden ya esta en la plancha, Porfavor termina de llenar\n los datos para el envio."
);

let cliente = confirm("Eres cliente registrado, o deseas registrarte?","Si ya lo estoy","NO LO ESTOY");

class MiCliente {
  constructor(telefono, nombre, edad, direccion) {
    this.telefono = telefono;
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }
}

if (cliente) {

  let nombre = prompt("Escribe un nombre y un apellido");
  let edad = prompt("Que edad tienes?");
  let telefono = prompt("Escribe tu numero de telefono para contactarnos");
  let direccion = prompt("Escribe tu direccion de envio");

  const clienteNuevo = new MiCliente(telefono, nombre, edad, direccion);

  console.log("cliente nuevo", clienteNuevo);
} else {
  let telefono = prompt("Escribe tu numero de telefono para contactarnos");
}
