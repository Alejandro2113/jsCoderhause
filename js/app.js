/*Orden de pupusas (Me costo encontrat otro ejemplo) ver 2.0.
Alumno= Moises Alejandro Gonzalez Moran.
Comision CODERHAUSE javascrit (No "JAVA" sino me funean) #54005.
Tutoría a cargo de Marcelo Furlong.
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
}

//Pirmer valor para la suma
let pupusas = {
  revueltas: 0,
  frijol: 0,
  campesina: 0,
  chicharon: 0,
  vegetariana: 0,
};

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

  let pupas = { revueltas, frijol, campesina, chicharon, vegetariana };

  //sumas use logica de sumas acumuladas (se que use objetos pero queria un orden en una base)
  pupusas.revueltas = pupas.revueltas + pupusas.revueltas;
  pupusas.frijol = pupas.frijol + pupusas.frijol;
  pupusas.campesina = pupas.campesina + pupusas.campesina;
  pupusas.chicharon = pupas.chicharon + pupusas.chicharon;
  pupusas.vegetariana = pupas.vegetariana + pupusas.vegetariana;

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
}

/* resumen del pedido (No encontre una manera mejor de mostrarlo en un alet, supongo que eso biene)
mas adelante en la cursada "JSON.stringify(pupusas) esto me lo saque de la manga con IA"*/ 

alert("El resumen de tu pedido es: " + JSON.stringify(pupusas));
alert("Tu orden ya esta en la plancha, espero lo disfrutes =)");

/*Nota al margen, quieres algo mas divertido?, si es asi porfavor revisa esto:
https://alejandro2113.github.io/civilapps/
Lo hice con amor y funciona al 100%, se puede revisar con el esquema de la primer imagen
, pero no supe como poder mostar un ciclo. y senti que complique mucho las cosas =@
*/
