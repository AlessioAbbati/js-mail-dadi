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

let findEmail = false
for (let i = 0; i < listMail.length; i++) {
    if(askMail == listMail[i]){
        findEmail = true;         
    } 
}