# Analizador de textos

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Introducción a la aplicación](#2-introducción-a-la-aplicación)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Funcionalidades](#4-funcionalidades)
- [5. Decisiones de diseño del proyecto](#5-Decisiones-de-diseño-del-proyecto)
  - [5.1. Sprint 1](#5.1-Sprint-1)
  - [5.2. Sprint 2](#5.2-Sprint-2-y-3)
- [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

---

## 1. Consideraciones generales

- Este es mi primer proyecto dentro del Bootcamp de Laboratoria(mayo-2024)
- El rango que le dedique al proyecto fue la duración estimada de los Sprints.

## 2. Descripción de la página web

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Cuando nos referimos a un analizador de texto es una aplicación para extraer información útil de un texto utilizando diversas técnicas, como el procesamiento del lenguaje natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan información básica sobre la longitud y la estructura del texto como por ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de oraciones y el conteo de párrafos. Otras métricas incluyen el análisis de sentimientos, que utiliza técnicas de NLP para determinar el tono general positivo, negativo o neutral del texto, y el análisis de legibilidad, que utiliza algoritmos para evaluar la complejidad y la legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información valiosa y métricas sobre los textos que pueden ayudar a las usuarias a tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

Este proyecto es sobre una aplicación web que servirá para que tu usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y métricas específicas sobre caracteres, letras, números, etc. Que hayan sido enviadas como _input_ por ella. Donde he utilizado HTML, CSS y JavaScript.

## 4. Funcionalidades

El listado de funcionalidades del Analizador de texto es el siguiente:

1.  La aplicación debe permite a la usuaria ingresar un texto escribiéndolo
    en un cuadro de texto.

2.  La aplicación debe calcula las siguientes métricas y actualiza el
    resultado en tiempo real a medida que la usuaria escribe su texto:

    **Recuento de palabras**: la aplicación debe poder contar el número de
    palabras en el texto de entrada y mostrar este recuento a la usuaria
    **Recuento de caracteres**: la aplicación debe poder contar el número de caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y mostrar este recuento a la usuaria.
    **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación debe poder contar el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento a la usuaria.
    **Recuento de números**: la aplicación debe contar cúantos números hay en el texto de entrada y mostrar este recuento a la usuaria.
    **Suma total de números**: la aplicación debe sumar todos los números que hay en el texto de entrada y mostrar el resultado a la usuaria.
    **Longitud media de las palabras**: la aplicación debe calcular la
    longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

3.  La aplicación debe permite limpiar el contenido de la caja de texto haciendo
    clic en un botón.

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 5. Decisiones de diseño del proyecto

### 5.1 Sprint 1

**Objetivos**

- [x] Bosquejar el prototipo en Figma
- [x] Realizar la estructura del HTML
- [x] Utilizar las propiedades del modelo de caja en CSS
- [x] Pasar la prueba de aceptación para CSS y HTML

Durante la primera semana del proyecto me propuse a leer el README base donde explicaba que funcionalidades y que requerimientos deberia tener el Analizador de Textos, luego de ello me plantee los objetivos para este 1er Sprint.

Uno de mis primeros objetivos para la 1ra semana fue terminar el esqueleto del HTMl y implementar las propiedades correspondientes en CSS.

Avance con un prototipo en la plataforma [Figma](https://www.figma.com/board/CmP0TFzWP1NTEaMhSWgXO7/Prototype-of-Website-Text-Analyzer?node-id=0%3A1&t=Hd6ggzIUrT9z7qKT-1) donde diseñe como queria que quede el analizador de texto una vez terminado. Tambien bosqueje la estructura HTML dentro del prototipo.

![Prototipo del Proyecto-Analizador de textos.](./Prototype%20of%20Website%20Text%20Analyzer.jpg)

### 5.2 Sprint 2 y Sprint 3

**Objetivos**

- [x] Avanzar con las funcionalidades en el analyzer.js
- [x] Hacer los eventos del DOM en index.js
- [x] Avanzar con el Readme
- [x] Pasar el test de criterios mínimos de aceptación

Durante la segunda y tercera semana me centre en las funcionalidades en java script en el archivo analyzer, las cuales son 6 funcionalidades que tiene el Analizador de texto, las cuales se llaman:

1. getWordCount:  Calcular el recuento de palabras de un texto.
2. getCharacterCount: Calcular el recuento de caracteres de un texto.
3. getCharacterCountExcludingSpaces: Calcula el recuento de caracteres excluyendo espacios y signos de puntuación de un texto.
4. getNumbersCount: Cuenta cúantos números hay en un texto.
5. getNumbersSum: Suma longitud media de los números en un texto.
6. getAverageWordLength: Calcula la longitud media de las palabras en un texto.

Luego de las funcionalidades a la par invoco los métodos en el archivo index.js median query selector y hago que los eventos como click y input funcionen e pueda interactuar con el usuario cuando se haga uso del cuadro de texto llamado Textarea y que surja un evento cuando se hace click en el botón limpiar métricas.

## Instrucciones de Uso

1. Clona el repositorio.
2. Abre el archivo `index.html` en tu navegador para el código de la página web.
3. Abre el archivo `analyzer` podras ver como se realizan las funcionalidades.
4. Abre el archivo `index` podras como se declaro los eventos del DOM.
5. Usa el inspector de código en el navegador para que puedas entender mejor la lógica del código

## Acerca de la Autora

Este proyecto fue desarrollado por **_Franchesca Zelaya_** como parte de un proyecto práctico como estudiante del Bootcamp de Laboratoria. Si tienes preguntas o comentarios, no dudes en ponerte en contacto al correo electrónico: fatimapolgar2001@gmail.com

## Visita la web:

[https://franchescaf.github.io/DEV015-text-analyzer/](https://franchescaf.github.io/DEV015-text-analyzer/)
