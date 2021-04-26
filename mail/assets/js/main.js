// Chiedo all'utente la mail
var mailUtente = prompt("Si prega di inserire la mail inserita durante la registrazione al portale Marvel");

// Controllo se la mail inserita è nel formato corretto
var myRegEx = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;

if ( myRegEx.test(mailUtente) )
  alert('Indirizzo email valido');
else
  alert('Indirizzo email non valido si prega di inserire la mail nel formato corretto.\nEsempio: nome@mail.com');

// Creo un array con le mail consentite
var mailConsentite = ["deadpool@gmail.com", "capamerica@outlook.it", "vision@libero.it", "yoyo@gmail.com"]
mailConsentite.push("falcon@icloud.com");

for(var i = 0; i < mailConsentite.length; i++){
    console.log(mailConsentite[i]);
}

// Controllo se la mail è presente in lista
var messaggio = mailConsentite.includes(mailUtente);

if (messaggio == true){
    messaggio = "Il tuo accesso è stato eseguito correttamente.";
    document.getElementById("allarme").style.backgroundColor="green";
}else{
    messaggio = "La mail inserita non è presente nel Database Marvel";
    document.getElementById("allarme").style.backgroundColor="red";
}

// Stampo un messaggio sull'esito del controllo

document.getElementById("msg").innerHTML = messaggio;



