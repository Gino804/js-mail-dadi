console.log('JS OK');

// Mail

// 1 - Creo un array di mail
const mails = ['giacomoportaluppi@gmail.com', 'marcolanci@gmail.com', 'eziogreggio54@libero.it', 'francescosimini@istitutoangioy.edu.it'];
console.table(mails);

// 2 - Chiedo all'utente di inserire una mail
const userMail = (prompt('Inserisci la tua mail', 'giacomoportaluppi@gmail.com').toLowerCase()).trim();
console.log(userMail);

// 3 - Creo una variabile che contiene il messaggio da visualizzare
let message = 'Mail errata';

// 4 - Controllo che la mail sia presente nella lista
for(let i = 0; i < mails.length; i++)
{
    // Se la mail nella posizione corrente è uguale alla mail inserita dall'utente
    if(mails[i] === userMail) message = 'Benvenuto';
}

// 5 Stampo in console il messaggio
console.log(message);

// Gioco dei dadi

// 1 - 2 - Genero casualmente i due numeri, quello dell'utente e quello del computer

const max = 6;

const userNumber = Math.floor(Math.random() * max) + 1;
const computerNumber = Math.floor(Math.random() * max) + 1;

console.log('Numero del giocatore:', userNumber);
console.log('Numero del computer:', computerNumber);

// 3 - Stabilisco chi ha fatto il punteggio più alto
if(userNumber > computerNumber) console.log('Ha vinto il giocatore');
else console.log('Ha vinto la CPU');