function newtons() {
m = prompt("Introduzca su peso en kg:", "");
if (isNaN(m) || !(m>" ")) {
alert('Debe introducir un número.')
return false;
}
planeta = prompt("Nombre de un planeta:", "");
if (!(isNaN(planeta)) || !(planeta>" ")) {
alert('Debe introducir un nombre válido.');
return false;
}
// Gravedad en m/s²
if (planeta=="Mercurio") g = 3.7;
else if (planeta=="Venus") g = 8.87;
else if (planeta=="Tierra") g = 9.8;
else if (planeta=="La Tierra") g = 9.8;
else if (planeta=="Marte") g = 3.7;
else if (planeta=="Ceres") g = 0.27;
else if (planeta=="Júpiter") g = 23.12;
else if (planeta=="Saturno") g = 9.0;
else if (planeta=="Urano") g = 8.7;
else if (planeta=="Neptuno") g = 11.0;
else if (planeta=="Plutón") g = 0.6;
else if (planeta=="Haumea") g = 0.8;
else if (planeta=="Makemake") g = 0.8;
else if (planeta=="Eris") g = 0.8; else {
alert("Planeta no existente.");
return false;
}
p = m*g;
if (planeta=="Tierra") planeta = "La Tierra"
alert("El peso que ejerces en " + planeta +" es de "+ p +" N.");
m2 = p/9.8;
alert("Si te pesaras con una báscula calibrada a 0 en La Tierra, en "+planeta+" marcaría "+m2+" kg.");
}function newtons() {
m = prompt("Introduzca su peso en kg:", "");
if (isNaN(m) || !(m>" ")) {
alert('Debe introducir un número.')
return false;
}
planeta = prompt("Nombre de un planeta:", "");
if (!(isNaN(planeta)) || !(planeta>" ")) {
alert('Debe introducir un nombre válido.');
return false;
}
// Gravedad en m/s²
if (planeta=="Mercurio") g = 3.7;
else if (planeta=="Venus") g = 8.87;
else if (planeta=="Tierra") g = 9.8;
else if (planeta=="La Tierra") g = 9.8;
alert("Planeta no existente.");
return false;
}

p = m*g;
if (planeta=="Tierra") planeta = "La Tierra"
alert("El peso que ejerces en " + planeta +" es de "+ p +" N.");
m2 = p/9.8;
alert("Si te pesaras con una báscula calibrada a 0 en La Tierra, en "+planeta+" marcaría "+m2+" kg.");
}
newtons();
