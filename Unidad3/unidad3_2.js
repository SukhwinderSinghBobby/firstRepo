var cadena="Centro de Estudios Aula Campus";
var locationOfString=cadena.search("Estudios");
//8posiciones formadas por las letras de Estudios   
for (let index = locationOfString+8; index < cadena.length; index++) {
    document.write(cadena[index]);
}
var locate=cadena.search("d");
document.write("<br>");
for (let index = locate++; index < cadena.length; index++) {
    
    document.write(cadena[index]);
}