const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('#contenuto');

button.onclick = function () {

    //svuoto contenuto pagina
    div.innerHTML = '';

    getApiDrink();
    
}

function getApiDrink() {
    fetch(url + input.value).then(response => response.json()).then(data => {
        // console.log(data);
        popoloDrinks(data.drinks);                
    });
}

function popoloDrinks(drinks) {
    drinks.forEach(function (d) {                    
            div.innerHTML += `
            <div class="col-sm-3">
                <div class="card" style="width:100%">
                    <img class="card-img-top" src="${d.strDrinkThumb}" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${d.strDrink}</h4>
                        <p class="card-text"><b>categoria: </b>${d.strCategory}</p>
                        <button class="btn btn-sm btn-warning" data-bs-toggle="collapse" data-bs-target="#D${d.idDrink}">Preparazione</button>

                        <div id="D${d.idDrink}" class="collapse">
                            ${d.strInstructionsIT}
                        </div>
                    </div>
                </div>
                <br>
            </div>
            `;
        });
}