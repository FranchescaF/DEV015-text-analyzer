import analyzer from "./analyzer.js";
//conecto el html con jsODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
document.addEventListener('DOMContentLoaded', () => {
  //Query selector
  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  const characterCountElement = document.querySelector('[data-testid="character-count"]');
  const characterNoSpacesCountElement = document.querySelector('[data-testid="character-no-spaces-count"]');
  const wordLengthAverageElement = document.querySelector('[data-testid="word-length-average"]');
  const numberCountElement = document.querySelector('[data-testid="number-count"]');
  const numberSumElement = document.querySelector('[data-testid="number-sum"]');
  const userInputTextarea = document.querySelector('[name="user-input"]');
  const resetButton = document.getElementById('reset-button');

  // lo que esta despues de la flecha es lo que se ejecutara una vez se ingreso texto a TEXTAREA
  userInputTextarea.addEventListener('input', () => {
    const userInput = userInputTextarea.value;
    
    //getwordCountElement
    const palabras = analyzer.getWordCount(userInput);
    wordCountElement.textContent= 'Palabras: ' + palabras;

    //getcharactercount
    const caracteres = analyzer.getCharacterCount(userInput);
    characterCountElement.textContent= 'Caracteres: ' + caracteres;

    //getCharacterCountExcludingSpaces
    const caracteressinespacios = analyzer.getCharacterCountExcludingSpaces(userInput);
    characterNoSpacesCountElement.textContent= 'Caracteres Sin Espacios: ' + caracteressinespacios;
    
    //getAverageWordLength
    const promediolongitud = analyzer.getAverageWordLength(userInput);
    wordLengthAverageElement.textContent= 'Promedio logitud: ' + promediolongitud;

    //getNumberCount
    const numeros = analyzer.getNumberCount(userInput);
    numberCountElement.textContent= 'Números: ' + numeros;

    //getNumberSum
    const suma = analyzer.getNumberSum(userInput);
    numberSumElement.textContent= 'Suma números: ' + suma;
  });

  //Descripción del botón reset
  // lo que esta despues de la flecha es lo que se ejecutara una vez que se haga click
  resetButton.addEventListener('click', () => {
    wordCountElement.textContent = 'Palabras: ';
    characterCountElement.textContent = 'Caracteres: ';
    characterNoSpacesCountElement.textContent = 'Caracteres Sin Espacios: ';
    wordLengthAverageElement.textContent = 'Promedio longitud: ';
    numberCountElement.textContent = 'Números: ';
    numberSumElement.textContent = 'Suma números: ';
    userInputTextarea.value = '';
  });
});

 