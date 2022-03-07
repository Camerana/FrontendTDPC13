
// to be continued...
// document.querySelectorAll('p')
// document.querySelector('#id')
// document.querySelector('.class')

// document.getElementsByTagName('p')





// chiamando la funzione
modificaPar();
// saluta(); // si ferma qui perché saluta non è dichiarata nel file
console.log('fine script')
/*
    --> va a cercare nel js la dichiarazione
    --> se la trova, esegue il contenuto
*/


// dichiarazione della funzione
function modificaPar() {
    const p = document.getElementById('par');

    p.innerText = 'nuovo testo';
    p.innerHTML = `<b>altro testo</b>`;
    p.style.color = 'red'; //color
    p.style.backgroundColor = 'grey' // background-color
    p.style.marginTop = '50px';
    p.style.padding = '25px';
    p.style.textAlign = 'center';
    p.style.borderRadius = '20px';
    p.style.border = 'solid black 5px';

    p.hidden = false;
}


function modificaDiv() {
    /*
        - creare div nell'html con un id
        - js: creare variabile
        - js: getElem...
        - innerHTML --> aggiungere dei p a quel div
        - cambiare 2 proprietà di stile del div
    */

    const div = document.getElementById('box');
    div.innerHTML = `
        <p>Test 1</p>
        <p>Test 2</p>
    `;
    div.style.fontSize = '25px';
    div.style.position = 'absolute';
    div.style.bottom = '0px';
    div.style.right = '0px';
    div.style.border = 'dotted red 5px';
}