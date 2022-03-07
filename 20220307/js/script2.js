const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
btn.onclick = modPar;
btn2.onclick = nascondiPar;

// dichiarazione
function modPar() {
    const p = document.getElementById('par');
    p.style.color = 'red';
}

function nascondiPar() {
    const p = document.getElementById('par');
    if(p.hidden == false) {
        p.hidden = true;
    }
    else {
        p.hidden = false;
    }
}

// dichiarazione
function saluta() {
    alert('ciao')
}


/*
    --> chiamata della funzione
    --> va a cercare nel js la dichiarazione
    --> se la trova, esegue il contenuto
    --> se non la trova: errore e NON va oltre
*/

// chiamata della funzione
// modPar();


const esempio = document.getElementById('esempio');
esempio.onclick = function () {
    alert('ciao sono una funzione anonima')

}

