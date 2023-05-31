console.log('JS OK');

// Mail

// 1 - Creo un array di mail
const mails = ['giacomoportaluppi@gmail.com', 'marcolanci@gmail.com', 'eziogreggio54@libero.it', 'francescosimini@istitutoangioy.edu.it'];
console.table(mails);

// 2 - Recupero gli elementi dal DOM
const mailElement = document.getElementById('mail');
console.log(mailElement);

const mailButton = document.getElementById('mail-start');
console.log(mailButton);

const mailMessagePlaceholder = document.getElementById('mail-message')
console.log(mailMessagePlaceholder);

mailButton.addEventListener('click', function()
{
    // 3 - Creo una variabile che contiene il messaggio da visualizzare
    let message = 'Mail errata';

    // 4 - Controllo che la mail sia presente nella lista
    for(let i = 0; i < mails.length; i++)
    {   
        // Se la mail nella posizione corrente è uguale alla mail inserita dall'utente
        if(mails[i] === mailElement.value) message = 'Benvenuto';
    }

    // 5 Stampo in pagina il messaggio
    mailMessagePlaceholder.innerText = message;
})

// Gioco dei dadi

// 1 - Recupero gli elementi dal DOM
const numbersPlaceholder = document.getElementById('numbers');
console.log(numbersPlaceholder);

const userNumberPlaceholder = document.getElementById('user-number');
console.log(userNumberPlaceholder);

const computerNumberPlaceholder = document.getElementById('computer-number');
console.log(computerNumberPlaceholder);

const dicesButton = document.getElementById('dices-start');
console.log(dicesButton);

const resultPlaceholder = document.getElementById('dices-result');
console.log(resultPlaceholder);

dicesButton.addEventListener('click', function()
{
    // Genero i numeri casuali del giocatore e del computer
    const max = 6;

    const userNumber = Math.floor(Math.random() * max) + 1;
    const computerNumber = Math.floor(Math.random() * max) + 1;

    console.log('Numero del giocatore:', userNumber);
    console.log('Numero del computer:', computerNumber);

    // Inserisco nel DOM le immagini relative ai punteggi ottenuti
    numbersPlaceholder.classList.remove('d-none');

    userNumberPlaceholder.innerHTML = `<img src="img/dice-${userNumber}.png" />`
    computerNumberPlaceholder.innerHTML = `<img src="img/dice-${computerNumber}.png" />`

    // Stabilisco chi ha fatto il punteggio più alto
    let result = 'Ha vinto la CPU!';

    if(userNumber > computerNumber) result = 'Ha vinto il giocatore!';
    else if(userNumber === computerNumber) result = "Pareggio";
    
    // Stampo in pagina il messaggio
    resultPlaceholder.innerText = result;
})