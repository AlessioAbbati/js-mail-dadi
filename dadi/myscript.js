// creo un array con i risultati del dado

let dado = [1,2,3,4,5,6];

// genero casualmente due numeri, per l'utente e per il pc

let numUtente= Math.floor(Math.random(1) * 6) + 1;
console.log(numUtente);

let numPc= Math.floor(Math.random(1) * 6) + 1;
console.log(numPc);

// metto le condizioni per la quale debba vincere uno o l'altro

if (numUtente > numPc) {
    console.log("hai vinto!")
    alert("hai vinto!")
} else if (numPc > numUtente) {
    console.log("hai perso!")
    alert("hai perso!")
} else {
    console.log("è un pareggio")
    alert("è un pareggio")
}