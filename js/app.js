// # Griglia Campo Minato

// - Creare il contenuto html statico
//     - Creare il buttone e metterlo nel header
//     - Creare il container con classe "grid"
//         - dentro grid creare la griglia 10 * 10 assegnando classe "cell" ad ogni elemento 

// - Creare il contenuto html tramite js

//     - Dichiarare la variabile "gridDOMElement" per recuperare il nostro DOM dove veranno inseriti le celle
const gridDOMElement = document.querySelector(".grid");
// console.log(gridDOMElement);

//     - Dichiarare la variabile "btnStartDOMElement" per recuperrare il nostro buttone
const btnStartDOMElement = document.getElementById("btn-start");
// console.log(btnStartDOMElement);
//     - Creare evento click sul btn-startDOMElement   
btnStartDOMElement.addEventListener("click", function(){

});
//         - Chiamare la funzione "deleteContentDOMElement" per svuotare il nostro contenuto con ogni 
//         - Dichiarare la variabile "numberElement ed assegnare il valore
//             - Dichiarare la variabile "selectDOMElement" e recuparare il suo valore assegnandolo a "numberElement"
//         - Chiamare la funzione "creaContenDOMElement"
//         - Dichiarare la variabile "cellDOMElement" per recuperare tutte le celle
//         - Creare il ciclo for per aggiungere evento su ogni elemento del dom
//             - Chiamare la funzione "onCellClick"
// FUNZIONI 
// - funzione deleteContentDOMElement(DOMElement)
function deleteContentDOMElement(DOMElement){
    DOMElement.innerHTML = "";
}
// - funzione creaContentDOMElement=(numberElement)
// - funzione onCellClick=()