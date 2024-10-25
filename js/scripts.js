/* # Ejercicios

## Bucles Determinados */

//1 - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.

const countDown = number => {
  for (let i = number; i > 0; i--) {
    console.log(i);
  }
};
countDown(10);

//2 - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
const sumOfAll = array => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
    console.log(total);
  }
};
sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//3 - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:

/*  4 x 0 \= 0 4 x 1 \= 4 4 x 2 \= 8 4 x 3 \= 12 4 x 4 \= 16 4 x 5 \= 20 4 x 6 \= 24 4 x 7 \= 28 4 x 8 \= 32 4 x 9 \= 36 4 x 10 \= 40   */

const multiplicationTable = four => {
  for (let i = 0; i < 11; i++) {
    console.log(`${four} x ${i} = ${four * i}`);
  }
};
multiplicationTable(4);

// 4- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

/* 4 x 10 \= 40 4 x 9 \= 36 4 x 8 \= 32 4 x 7 \= 28 4 x 6 \= 24 4 x 5 \= 20 4 x 4 \= 16 4 x 3 \= 12 4 x 2 \= 8 4 x 1 \= 4 4 x 0 \= 0  */

const inverseMultiplicationTable = four => {
  for (let i = 10; i > 0; i--) {
    console.log(`${four} x ${i} = ${four * i}`);
  }
};
inverseMultiplicationTable(4);

//5 - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

/* - "naciste en el año X"  
  - "En el año X cumpliste 1 año"  
  - "En el año X cumpliste 2 años"  
  - "En el año X cumpliste 3 años" .... */

const birthday = (year, each) => {
  console.log(`Naciste ${year}`);
  for (let i = 1; i < 5; i++) {
    console.log(`En el año ${2024 - each + i} cumpliste ${i} año`); /* 
    console.log(`En el año ${2024 - each + i} cumpliste ${i} año`); */

    // hay que añadir if para el año y años else if
  }
};
birthday(2024, 32);

//6 - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.

const evenNumbers = (number1, number2) => {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
evenNumbers(24, 48);

//7 - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const randomNumber = (num1, num2) => {
  for (let i = numb1; i <= num2; i++) {
    console.log(i.Math.floor(Math.random() * 11));
  }
};
randomNumber([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//8 - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

//9 - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

//10 - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

//11 - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1

// 12 - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

// 13 - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

//14 - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]

/* for (let counter = 0; counter <= 10; counter++) {
  console.log(counter);
} */

/* const number = 4

if(number===4){
    for (let counter = 0; counter <= 10; counter++)
} */

/* const prinLetters = letters => {
  for (let i = 0; i <= letters.length; i++) {
    console.log(`El contador vale ${i}`);
    console.log(letters[i]);
  }
};

prinLetters(['A', 'B', 'C']); */

/* const word = 'Josefina';
// es para recorrer un array o una palabra. solo va para adelante de 0 al final string o array."for off" para recorrer estrucuras principio a fin
for (const letter of word) {
  console.log(letter); 
}
 */
