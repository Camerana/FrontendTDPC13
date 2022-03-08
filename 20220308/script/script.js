// ripasso 7/3
const p = document.getElementById('par');
const button = document.getElementById('btn');

button.onclick = coloraPar;

function coloraPar() {
    p.style.color = 'red';
}



const paragrafi = document.getElementsByTagName('p');
const button2 = document.getElementById('btn2');

button2.onclick = coloraTuttiPar;

function coloraTuttiPar() {
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.backgroundColor = 'green';
    }
}



const parPari = document.getElementsByClassName('pari');
const button3 = document.getElementById('btn3');

button3.onclick = coloraParPari;

function coloraParPari() {
    for (let i = 0; i < parPari.length; i++) {
        parPari[i].style.backgroundColor = 'yellow';
    }
}




const button4 = document.getElementById('btn4');

button4.onclick = function () {
    location.reload();
}
