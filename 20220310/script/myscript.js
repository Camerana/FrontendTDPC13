
debugger;

// creare elementi html
const newPar = document.createElement('p');

// modifico varie proprietà dell'elemento
newPar.innerText = 'io sono un paragrafo creato con js';

// agganciare elemento
document.body.appendChild(newPar); // agganciamo in fondo al body

//////////////////////////////

const newText = document.createElement('span');
const div = document.getElementById('mioContenitore');

newText.innerText = 'io sono uno span che finirà dentro un alert';
div.appendChild(newText);

saluta();


//////////////////////////////

const item = document.createElement('li');
const ul = document.getElementById('lista');

item.innerText = 'voce della lista';
item.style.color = 'blue';
ul.appendChild(item);


//////////////////////////////

const newDiv = document.createElement('div');
const contenitore2 = document.getElementById('contenitore2');

newDiv.innerHTML = `
    <div class="card" style="width:400px">
        <div class="card-body">
            <h4 class="card-title">Jane Doe</h4>
            <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
            <a href="#" class="btn btn-primary">See Profile</a>
        </div>
        <img class="card-img-bottom" src="https://blog.giallozafferano.it/albe/wp-content/uploads/2020/08/15FA1142-B5FA-410C-878B-2B8745B85F64_001-960x949.jpg" alt="Card image" style="width:100%">
    </div>  
`;

contenitore2.appendChild(newDiv);

/////////////////////////////

// aggiungere una classe a un elemento
const elem = document.getElementById('primo');
elem.classList.add('scritteRosse', 'testoCentrato');
// elem.classList.add('btn', 'btn-warning');


// rimuovere classe
const elem2 = document.getElementById('secondo');
elem2.classList.remove('scritteRosse');









function saluta() {
    const parola = 'ok';
    console.log('ciao');
}