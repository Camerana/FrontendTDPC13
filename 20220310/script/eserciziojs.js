const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const par = document.getElementById('paragrafo');

img1.onmouseenter = function() {
    console.log('entrato in immagine');
    par.classList.add('arancio');
}

img2.onmouseenter = function() {
    console.log('entrato in immagine');
    par.classList.remove('arancio');
}



img1.onmouseleave = messaggio;
img2.onmouseleave = messaggio;

function messaggio() {
    console.log('uscito da immagine');
}