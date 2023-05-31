## Traccia:

### Mail:

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

### Gioco dei dadi

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.
- Stampare in console

### BONUS:

- Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone
- Nell'esercizio dadi, mettiamo un tasto "Gioca" ed eseguiamo la logica di gioco al click del bottone
- stampiamo i risultati di entrambi gli esercizi in pagina

<hr>

## Steps:

### Mail:

1. Creo una lista di email con contenuto impostato da me
2. Recupero gli elementi dal DOM

- **QUANDO** l'utente clicca sul bottone
  - Creo una variabile che contiene il messaggio da visualizzare, inizializzandola come "mail errata"
  - Controllo che la mail sia presente nella lista:
  - **FINTANTO CHE** il contatore è minore della lunghezza della lista
    - **SE** l'elemento corrente della lista corrisponde alla mail inserita
      - Assegno alla variabile del messaggio una frase di benvenuto
  - Stampo in pagina il messaggio

### Gioco dei dadi

1. Recupero gli elementi dal DOM

- **QUANDO** l'utente clicca sul bottone
  - Genero un numero casuale da 1 a 6 e lo salvo in una variabile come numero del giocatore
  - Genero un numero casuale da 1 a 6 e lo salvo in una variabile come numero del computer
  - Inserisco nel DOM le immagini relative ai punteggi ottenuti
  - Creo una variabile che contiene il risultato, inizializzandola come "ha vinto la CPU"
  - Stabilisco chi ha fatto il punteggio più alto:
    - **SE** il numero del giocatore è maggiore del numero del computer
      - Assegno alla variabile del risultato "ha vinto il giocatore"
    - **ALTRIMENTI SE** il numero del giocatore è uguale al numero del computer
      - Assegno alla variabile del risultato "pareggio"
  - Stampo in pagina il risultato
