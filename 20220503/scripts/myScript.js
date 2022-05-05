// let nome = 'asdffdsf';
// let eta = 55;
// let isAlive = false;
// let colori = [
//     'blu', 'rosso', 'verde'
// ];

// oggetto javascript
// let persona = {
//     id: 1,
//     nome: 'adalskd',
//     eta: 6786,
//     coloriPreferiti: [
//         'verde', 'bianco'
//     ],
//     indirizzo: {
//         cap: 65454335,
//         prov: 'TO'
//     }
// };


// console.log(persona.coloriPreferiti[1]);

// let persona2 = ``;


// console.log(persona);
// console.log(persona2);

// let persona2Json = JSON.parse(persona2);
// console.log(persona2Json);


// ajax per leggere json
let reqUrl = '../json/persone.json';
let req = new XMLHttpRequest();
req.open('GET', reqUrl);
req.responseType = 'json';
req.send();

req.onload = function() {
    let data = req.response
    console.log(data);


    const div = document.getElementById('contenuto');

    for(i = 0; i < data.length; i++) {
        div.innerHTML += `
            <p>ID: ${data[i].id}</p>
            <p>
                Nome: <b>${data[i].nome}</b>
            </p>
            <p>Capelli: ${data[i].coloreCapelli}</p>
            <hr>
        `
    }
}

