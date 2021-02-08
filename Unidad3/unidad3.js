var horasTrabajadas = prompt("Intrudocir horas trabajadas");
var diaTrabajado = new Date(
  prompt("Insertar dia trabajado(format YYYY-MM-DD)")
);
console.log(diaTrabajado.getDay());
const precioFinde = 20;
const precioEntresemana = 15;
if (diaTrabajado.getDay()== 5 || diaTrabajado.getDay() == 6) {
  var total = precioFinde * horasTrabajadas;
  console.log(total);
  alert("el empleado deberia cobrar por trabajar findes un total de " + total +"Euros");
} else {
  var total = precioEntresemana * horasTrabajadas;
  console.log(total);

  alert("El empleado deberia cobrar por trabajar entresemana un total de " + total+"Euros");
}
