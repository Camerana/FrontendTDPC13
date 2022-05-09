const tabellaScuse = document.querySelector('tbody');

const btn = document.querySelector('button');
btn.onclick = function () {
    svuotaTabella();
    const url = 'https://excuser.herokuapp.com/v1/excuse/10';
    // GetApi(url);    
    GetApiNew(url);    
}


function svuotaTabella() { 
    tabellaScuse.innerHTML = '';
}


function GetApiNew(url) {

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        popolaTabellaScuse(data);
    });

}

function GetApi(url) {
    // ajax per leggere json
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.responseType = 'json';
    req.send();

    req.onload = function () {
        let data = req.response;
        console.log(data);
        popolaTabellaScuse(data);
    }
}

function popolaTabellaScuse(data) {

    data.forEach(function (scusa) {
        tabellaScuse.innerHTML += `
            <tr>
                <td>${scusa.id}</td>
                <td>${scusa.excuse}</td>
                <td>${scusa.category}</td>
            </tr>
        `;
    });
}

// funzione anonime (e con arrow function)
/*
btn.onclick = function() {

}

btn.onclick = () => {

}

function Saluta() {

}


$(document).ready(function() {});

$(document).ready(() => {
    
});

*/