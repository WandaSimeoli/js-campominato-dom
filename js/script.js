// Creare un bottone per generare una griglia quadrata;
// Creare una griglia quadrata con 10 caselle numerate per 10 righe (tot 100);
// Al click dell'utente sulla cella, la cella cliccata si colora di azzurro;
// Al click dell'utente stampare un messaggio in console con il numero della cella cliccata;



// Creare il click del button

const button = document.getElementById('click');

button.addEventListener('click', function () {

    // Creare la griglia numerata 

    const gridNumber = 100; 
    for ( let i = 1; i <= gridNumber; i++ ) {
    
    const gridContainer = document.querySelector('.grid-container');
    const cell = document.createElement ('div');
    gridContainer.append(cell);
    cell.innerHTML = (i);

    // Aggiungere le classi 
    
    cell.classList.add('cell');
    
    // Attivare il toggle al click
    cell.addEventListener ('click', function () {
        cell.classList.toggle('bg-toggle');
        console.log(i);
    });
    
    };
    
}); 






    
