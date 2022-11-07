// CALCOLO PREZZO BIGLIETTO DEL TRENO

// CHIEDERE ALL'UTENTE KM CHE VUOLE PERCORRERE
let distanza = parseInt(prompt("Inserisci i km che vuoi percorrere"))

console.log("km", distanza);

// CHIEDERE ALL'UTENTE LA SUA ETA'
let eta = parseInt(prompt("Inserisci la tua età"))

console.log("anni", eta);

// CALCOLO PREZZO PER KM
let prezzo = distanza * 0.21

console.log("euro", prezzo);

// SCONTO 20% MINORENNI
if (eta < 18){
  let sconto = (prezzo * 20) / 100;
  let prezzoScontato = prezzo - sconto;

  console.log("sconto euro", sconto)

  document.getElementById("title").innerHTML = `Hai ${eta} anni, devi percorrere ${distanza} km e hai diritto ad uno sconto del 20%. Il prezzo finale del tuo biglietto è di ${prezzoScontato.toFixed(2)} euro.` 
}

// SCONTO 40% OVER 65
else if (eta >= 65){
  let sconto = (prezzo * 40) / 100;
  let prezzoScontato = prezzo - sconto;

  console.log("sconto euro", sconto)
  
  document.getElementById("title").innerHTML = `Hai ${eta} anni, devi percorrere ${distanza} km e hai diritto ad uno sconto del 40%. Il prezzo finale del tuo biglietto è di ${prezzoScontato.toFixed(2)} euro.` 
}

else {
  document.getElementById("title").innerHTML = `Hai ${eta} anni e devi percorrere ${distanza} km. Il prezzo finale del tuo biglietto è di ${prezzo} euro.`
}