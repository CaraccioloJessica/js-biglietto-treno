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

if (eta < 18){  // SCONTO 20% MINORENNI
  let sconto = (prezzo * 20) / 100;

  console.log("sconto euro", sconto)
}

else if (eta >= 65){  // SCONTO 40% OVER 65
  let sconto = (prezzo * 40) / 100;

  console.log("sconto euro", sconto)
}

// OUTPUT
