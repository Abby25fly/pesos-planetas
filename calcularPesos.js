var peso = prompt("Ingrese su peso en Kg");

function pesoPlanet(peso) {
  var masa = (peso/9.8).toFixed(2);
  var pesoMercurio = (masa * 3.70).toFixed(2);
  var pesoNept = (masa * 11).toFixed(2);
  var pesoMarte = (masa * 3.71).toFixed(2);
  var pesoVenus = (masa * 8.87).toFixed(2);
  document.write("Tu peso en Mercurio es " + pesoMercurio + " Kg" + "<br \>");
  document.write("Tu peso en Venus es " + pesoVenus + " Kg" + "<br \>");
  document.write("Tu peso en Marte es " + pesoMarte + " Kg" + "<br \>");
  document.write("Tu peso en Neptuno es " + pesoNept + " Kg" + "<br \>");
}
pesoPlanet(peso);


