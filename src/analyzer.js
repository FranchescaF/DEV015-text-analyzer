const analyzer = {
  getWordCount: (text) => {
    //Esta función debe retornar el recuento de palabras 
    //que se encuentran en el parámetro `text` de tipo `string`.
    // Verificamos si el parámetro text está vacío
    if (text.trim() === '') {
      return 0; // Si está vacío, retornamos 0
    }
    // Utilizamos el método split() para dividir el texto en palabras
    const words = text.split(' ');
    // Retornamos la cantidad de palabras
    return words.length;
  },

  getCharacterCount: (text) => {
    //Esta función debe retornar el recuento de caracteres 
    //que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //Esta función debe retornar el recuento de caracteres 
    //excluyendo espacios y signos de puntuación que se 
    //encuentran en el parámetro `text` de tipo `string`.
    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      // Verifica si no es un espacio ni un signo de puntuación
      if (character !== ' ' && !(/[^\w\s]/.test(character))) { 
        characterCount++;
      }
    }
    return characterCount;
  },

  getAverageWordLength: (text) => {
    //Esta función debe retornar la longitud media de palabras 
    //que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = analyzer.getWordCount(text);
    const characterCount = analyzer.getCharacterCountExcludingSpaces(text);
    if (wordCount > 0) {
      const averageLength = characterCount / wordCount;
      // Utilizamos toFixed(2) para mostrar solo dos dígitos decimales
      //parseFloat convertimos en decimales el string
      return parseFloat(averageLength.toFixed(2)); 
    } else {
      return 0.00; // Si no hay palabras, retornamos "0.00"
    }
  },

  getNumberCount: (text) => {
    //Esta función debe retornar cúantos números se encuentran 
    //en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g);
    if (numbers) {
      return numbers.length;
    } else {
      return 0; // Si no se encuentran números, retornamos 0
    }
  },

  getNumberSum: (text) => {
    //Esta función debe retornar la suma de todos los números 
    //que se encuentran en el parámetro `text` de tipo `string`.
    // Utilizamos match para encontrar todos los números en el texto
    const numbers = text.match(/\d+/g); 
    let sum = 0;
    if (numbers) {
      //usamos forEach para iterar sobre cada elemento(number) del numbers(arreglo)
      numbers.forEach((number) => {
        // Convertimos cada número a tipo `number` y lo sumamos a la variable `sum`
        sum += parseFloat(number); 
      });
    }
    return sum;
  },
};

export default analyzer;
