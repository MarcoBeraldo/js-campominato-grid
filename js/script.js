// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Procediamo milestone per milestone senza invertire l'ordine.

// !MILESTONE 1

// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

// !MILESTONE 2

// Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
// Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

// !MILESTONE 3

// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

// !MILESTONE 4

// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

// ! BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Note:
// - questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)      

// *FUNZIONI
const createCell = () => {
    const newCell = document.createElement('div');
    newCell.className = 'cell'
    console.log(newCell);
    return newCell;
};











// *prendo gli elementi utili
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const retryButton = document.getElementById('retry-button');
let rows = 10;
let cells = 10;
const totalCells = rows * cells

// quando premo il bottone 'Gioca!' creo la griglia, tolgo il bottone 'Gioca!' e mostro il bottone 'Ricomincia!'
playButton.addEventListener('click', function () {

    for (let i = 1; i <= totalCells; i++) {
        // creo una nuova cella
        const newCell = createCell();

        grid.appendChild(newCell);
    };


    playButton.classList.add('d-none');
    retryButton.classList.remove('d-none');
})











