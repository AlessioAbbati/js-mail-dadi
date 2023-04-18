// chiedere all'utente la propria email
// creare un array con le email valide


const askMail = prompt("inserisci la tua email");
console.log(askMail);

let listMail = [
    "uno@live.it",
    "due@live.it",
    "tre@live.it",
    "quattro@gmail.com",
    "cinque@gmail.com",
];
console.log(listMail);

// creo le condizioni per vedere se la mail inserita è valida o meno

let findEmail = false
for (let i = 0; i < listMail.length || !listMail; i++) {
    if(askMail == listMail[i]){
        findEmail = true;         
    } 
}

if (findEmail == true) {
    console.log("email trovata!")
} else {
    console.log("email non trovata, inserirne una valida")
}