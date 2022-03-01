const x = 12.785769854;

let username = 'ciao111';
let isAdmin = false;

// console.log('isAdmin: ' + isAdmin)
// console.log('username type: ' + typeof username)
// test: false

let frase = 'Lorem ipsum dolor sit amet';
let p = 'ciao'

// console.log(frase);
// console.log(frase.length);

let res = frase.replace('ipsum', p);
// console.log(res);

let frase2 = 'ciao sono Danilo e ho 18 anni.';
// console.log(ciao[0]);

let posizioneParola = frase2.indexOf('Danilo');
// console.log(posizioneParola);

//es: sostituisci Danilo con Marco
// console.log(frase2.replace('Danilo', 'Marco'))

//es: estrai la parola danilo dalla frase:
let nome1 = 'Danilo'
let result = frase2.substr(posizioneParola,
    nome1.length);
// console.log(result);


let frase3 = 'Lorem ipsum dolor sit amet';

// console.log(frase3.toLowerCase());
// console.log(frase3.toUpperCase());


// numeri
let num0 = 12.445454654654;
// console.log(num0.toFixed(2));

// operatori principali
let num1 = 27;
let num2 = 5;
// console.log('somma: ' + (num1 + num2))
// console.log(`somma:         ${num1 + num2}`);
// console.log(`sottrazione:   ${num1 - num2}`);
// console.log(`moltiplicazione: ${num1 * num2}`);
// console.log(`divisione:       ${num1 / num2}`);
// console.log(`resto:           ${num1 % num2}`);

// ===
let numx = 5;

if (numx === '5') {
    console.log('if');
}
else {
    console.log('else');
}

// conversioni di tipi
// numero --> stringa
let pippo = 34;
console.log(typeof pippo.toString())

let w = 5;
w++; //w = 5 + 1
console.log(w)
// w += 4 // w = w + 4

