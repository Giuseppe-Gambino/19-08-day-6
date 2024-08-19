/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Abbiamo 8 datatype in JavaScript, ma cosa sono i datatype?
i datatype sono delle classi che vanno a specificare il tipo di valore che ha una variabile,
per esempio prendendo in considerazione i primi principali datatype abbiamo:

-String,  questo ci sta dicendo che il contenuto all'interno della variabile è formato da caratteri o sequenza di caratteri,
          quindi un testo, es. let nome = "Giuseppe";
-Number,  questo indica un numero o una sequenza di numeri, es. let = 21;

-Boolean, questo indica un valore Boolenao, ovvero contiene un true o un false (vero o falso)

Questi 2 invece vanno ad indicare che all'interno della variabile non c'è alcuno valore

-null,      questo lo indica in modo intenzionale (quindi siamo noi che intenzionalmente gli abbiamo detto che è vuota)
-Undefined, questo lo indica in modo non intenzionale (ovvero una variabile che abbiamo dichiarato ma a cui non abbiamo attribuito nessun valore)*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myname = "Giuseppe";
console.log(myname);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myname = "Gambino";
console.log(myname);

// possiamo notare che il valore cambia, ma se noi quella stessa variabile la dichiariamo con const?

const nome = "Francesco";

console.log(nome);

// nome = "Sebastiano";

console.log(nome);

// Possiamo notare che il contenuto non cambia, dandoci un errore che blocca JS, perche con const la variabiele è unica e sola, e non puo essere cambiata

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";

let name2 = "John";

console.log(name1 === name2);

// let nomedue = name2.toLowerCase();

name2 = name2.toLowerCase();

console.log(name1 === name2);
