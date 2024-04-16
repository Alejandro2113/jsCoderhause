/*sucs ver 2.0 
Alumno= Moises Alejandro Gonzalez Moran
Comision CODERHAUSE javascrit (No JAVA) #54005
Tutoría a cargo de Marcelo Furlong
*/

alert(
  "Programa para ordenar pupusas \n\n Aqui podes pedir por persona\n\n estas listo para iniciar?"
);

let personas = parseInt(prompt("Cuantas personas van a ordenar?"));

function recarga() {
  let entrada = confirm(
    "Valores invalidos!!!\nTienes que ingresar cuantas personas son (15 maximo).\nQuieres empezar de nuevo?"
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

if (personas <= 0) {
  recarga();
} else if (personas >= 15) {
  alert("Ingresaste un valor muy alto, tu orden es muy grande.");
  recarga();
}

//aqui la funcion que te deja seleccionar y lo guarde

for (i = 1; i <= personas; i++) {
  alert("¿Que pupusas quiere la persona " + i + "?.");
}

// resumen del pedido
