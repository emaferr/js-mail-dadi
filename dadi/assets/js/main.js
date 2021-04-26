// Genero un numero random per l'utente
var numeroUtente;

numeroUtente = Math.round(Math.random()*5)+1;

console.log(numeroUtente);

document.getElementById("numero_utente").innerHTML = numeroUtente;

// Genero un numero randomm per il computer
var numeroComputer;

numeroComputer = Math.round(Math.random()*5)+1;

console.log(numeroComputer);

document.getElementById("numero_computer").innerHTML = numeroComputer;

// Stabilisco il vincitore
var risultato;

if (numeroUtente > numeroComputer){
    risultato = "Il vincitore è Utente";
}else if (numeroUtente < numeroComputer){
    risultato = "Il vincitore è Computer";
}else {
    risultato = "Non vince nessuno"
}

console.log(risultato);

document.getElementById("esito").innerHTML = risultato;