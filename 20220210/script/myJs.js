/*
    ARGOMENTI VISTI A LEZIONE:
    - best pratices nomi delle variabili
    Per riassumere:
        variabile con una sola parola --> tutto minuscolo
        variabile con più parole --> camelCase (iniziale minuscola, prima lettera di parole successive Maiuscola)
    
    Variabili pre 2015 --> var
    Variabili post 2015 --> const e let
    const è una costatnte quindi una volta inizializzata, il valore non può essere modificato
    let può essere ance modificata

    - dichiarazione: let firstName;
    - inizializzazione firstName = 'Luca'
    oppure
    - dichiarazione ed inizializzazione: let LastName = 'Giurato'


*/

// dichiarazione di una variabile
let annoDiNascita;
let nome;

// inizializzare variabile
annoDiNascita = 1988;
nome = 'Walter';

// dichiarazione ed inizializzazione
let cognome = 'White';
const numeroPreferito = 7;
// numeroPreferito = 100; 
// dà errore perché numeroPreferito è una costante e non può essere modificata!

// creare dei log da monitorare nella Console (F12)
console.log('ciao io sono un log');
let messaggio = 'ciao, io sono un altro messaggio';
console.log(messaggio);

console.log(annoDiNascita); // 1988

// concatenazione:
console.log('log 1: ' + annoDiNascita); // log1: 1988

// variabili let sono sovrascrivibili:
nome = 'Danilo';
console.log(nome);


// tipi di variabili (N.B: JavaScript è un linguaggio NON tipizzato)
let firstName = 'Danilo'
let isAdmin = false; // oppure true
let age = 33;
let persone = ['Walter', 'Jesse', 'Gus', 'Saul']; //array
/*
    indice dell'array parte da 0, quindi:
    0 --> Walter
    1 --> Jesse
    ...
    3 --> Saul
    4 --> undefined

    lunghezza di un array accessibile con la proprietà length: persone.length;
*/

console.log(persone);
console.log(persone[1]);

// modificare un elemento specifico di un array (con il suo indice)
persone[3] = 'Mike';
console.log(persone);
console.log(persone.length);

let numeri = [1,2,3];
console.log('numero: ' + numeri[2]);

// oggetti javascript
let animal = {
    name: 'Giotto',
    type: 'dog',
    subType: 'Dalmata',
    years: 13,
    colors: ['black', 'white'],
    isAlive: false,
    owner: {
        firstName: 'Crudelia',
        lastName: 'De Mon',
        nationality: 'British',
        age: 99
    }
};

console.log(animal); // in cosole verdrò l'intero oggetto e le sue proprietà
console.log(animal.name);
console.log(animal.colors[1]); //in console verdrò white

