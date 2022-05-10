const btn = document.querySelector('button');
btn.onclick = function () {

    // loggare a console cosa ha scritto 
    // l'utente nell'input
    let input = document.querySelector('input').value;
    console.log(input);

    if (input == '') {
        alert('scemo/a');
    }
    else {
        getApiDrinks(input);
    }

}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function getApiDrinks(input) {

    fetch(url + input)
        .then(response => response.json())
        .then(data => {
            //console.log(data);

            data.drinks.forEach(function (drink) {
                console.log(drink);

                const div = document.querySelector('#contenuto');
                div.innerHTML += `
                <h3>${drink.strDrink}</h3>
                <img src="${drink.strDrinkThumb}" width="200px">
                <p>${drink.strInstructionsIT}</p>
                <hr>
                `;
            });



        });

}




// 1. jquery ($.get)
// $(document).ready(function() {

//     $.get(url, function(data) {
//         console.log(data);
//     });

// });

// // 2. XMLHttpRequest
// let req = new XMLHttpRequest();
// req.open('GET', url);
// req.responseType = 'json';
// req.send();
// req.onload = function() {
//     let data = req.response;
//     console.log(data);
// }

// 3. fetch

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });
