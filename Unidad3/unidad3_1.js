class Trabajador {
  constructor(nombre, apellido, sueldo, fechaAlta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.sueldo = sueldo;
    this.fechaAlta = fechaAlta;
  }
  toString() {
    return (
      "" +
      this.nombre +
      this.apellido +
      "(" +
      this.sueldo +
      ")" +
      this.fechaAlta
    );
  }
}

var trabajador1 = new Trabajador("Juan", "Garcia", 3000, "2020-06-11");
var trabajador2 = new Trabajador("Pepito", "Palotes", 3000, "1970-05-11");
var trabajador3 = new Trabajador("Manz", "Yo", 3000, "1990-03-11");

var trabajadoresEmpresa = new Array(trabajador1, trabajador2, trabajador3);

for (let index = 0; index < trabajadoresEmpresa.length; index++) {
  document.writeln("<br>PRIMERA:" + trabajadoresEmpresa[index].toString());
  var sueldo = trabajadoresEmpresa[index].sueldo;
  var d = new Date(trabajadoresEmpresa[index].fechaAlta);
  if (d.getFullYear() < 1980) {
    var sueldoConRetencion = sueldo;
    sueldoConRetencion = sueldo - (sueldo / 100) * 20;

    sueldo = sueldoConRetencion;
    trabajadoresEmpresa[index].sueldo = sueldo;

    console.log(sueldoConRetencion);
  } else if (d.getFullYear() > 1980 && d.getFullYear() < 2000) {
    var sueldoConRetencion = sueldo;
    sueldoConRetencion = sueldo - (sueldo / 100) * 15;
    sueldo = sueldoConRetencion;

    trabajadoresEmpresa[index].sueldo = sueldo;
  } else if (d.getFullYear() > 2000) {
    var sueldoConRetencion = sueldo;
    sueldoConRetencion = sueldo - (sueldo / 100) * 5;

    sueldo = sueldoConRetencion;

    trabajadoresEmpresa[index].sueldo = sueldo;
  }
  document.writeln(
    "<br>DESPUES DE LOS CAMBIOS:" + trabajadoresEmpresa[index].toString()
  );
}
