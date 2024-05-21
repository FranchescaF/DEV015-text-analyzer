# Analizador de textos

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Introducción a la aplicación](#2-introducción-a-la-aplicación)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Funcionalidades](#4-funcionalidades)
- [5. Boilerplate](#5-boilerplate)
- [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
- [7. Pruebas](#7-pruebas)
- [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

---

## 1. Consideraciones generales

- Este es mi primer proyecto dentro del Bootcamp de Laboratoria(mayo-2024)
- El rango que le dedique al proyecto fue la duración estimada de los Sprints.

## 2. Introducción a la aplicación

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Cuando nos referimos a un analizador de texto es una aplicación para extraer información útil de un texto utilizando diversas técnicas, como el procesamiento del lenguaje natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan información básica sobre la longitud y la estructura del texto como por ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de oraciones y el conteo de párrafos. Otras métricas incluyen el análisis de sentimientos, que utiliza técnicas de NLP para determinar el tono general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 3. Resumen del proyecto

Este proyecto es sobre una aplicación web que servirá para que tu usuaria
pueda analizar un texto en el navegador mostrando una serie de indicadores y métricas específicas sobre caracteres, letras, números, etc. Que hayan sido enviadas como _input_ por ella. Donde he utilizado HTML, CSS y JavaScript.

## 4. Funcionalidades

El listado de funcionalidades es el siguiente:

1.  La aplicación debe permitir a la usuaria ingresar un texto escribiéndolo
    en un cuadro de texto.

2.  La aplicación debe calcular las siguientes métricas y actualizar el
    resultado en tiempo real a medida que la usuaria escribe su texto:

        - **Recuento de palabras**: la aplicación debe poder contar el número de
        palabras en el texto de entrada y mostrar este recuento a la usuaria
        - **Recuento de caracteres**: la aplicación debe poder contar el número de
        caracteres en el texto de entrada, incluidos espacios y signos de
        puntuación, y mostrar este recuento a la usuaria.
        - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
        la aplicación debe poder contar el número de caracteres en el texto de
        entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento
        a la usuaria.
        - **Recuento de números**: la aplicación debe contar cúantos números hay en
        el texto de entrada y mostrar este recuento a la usuaria.
        - **Suma total de números**: la aplicación debe sumar todos los números que
        hay en el texto de entrada y mostrar el resultado a la usuaria.
        - **Longitud media de las palabras**: la aplicación debe calcular la
        longitud media de las palabras en el texto de entrada y mostrársela a la usuaria.

3.  La aplicación debe permitir limpiar el contenido de la caja de texto haciendo
    clic en un botón.

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 5. Decisiones de diseño del proyecto

La lógica del proyecto esta implementada completamente en JavaScript. En
este proyecto NO uso librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto se hizo un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura básica de un proyecto que sirve como un punto de partida con
archivos y configuración inicial de dependencias y tests.

El boilerplate que se clono del github de Laboratoria contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```
