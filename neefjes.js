// Info tabje
const info = document.getElementById(`titel`);
const informatie = document.getElementById(`informatie`);

// Alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// Hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

// Alle plaatjes een Eventlistener geven
for(i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener(`click`, klik);
    plaatjes[i].addEventListener(`dblclick`, dubbelklik);
}

function vulKopAan() {
    document.getElementById('duck').innerText = `: ${this.title}`;
    document.getElementById('kop').style.color  = this.dataset.kleur;
    this.style = `border: 5px ${this.dataset.kleur} solid;`;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = `red`;
    this.style = `border: none;`;
}

function klik() {
    info.style = `color: ${this.dataset.kleur};`;
    info.innerHTML = this.title;
    informatie.innerHTML = this.dataset.info;
}

/** 
    Maak noeg een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks, 
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit 
    data-kleur toegevoegd worden aan het element div#bolletjes
*/

function dubbelklik() {
    const bol = document.createElement(`div`);
    bol.className = "bolletje";
    bol.style.background = this.dataset.kleur;
    bolletjes.appendChild(bol);

    this.dataset.clicks = parseInt(this.dataset.clicks) + 1;
    this.parentElement.childNodes[2].innerHTML = this.dataset.clicks;
}
