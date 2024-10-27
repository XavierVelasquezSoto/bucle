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
  for (let i = 1; i <= 5; i++) {
    if(i <= 1){
    console.log(`En el año ${year - each + i} cumpliste ${i} año`);
  }else if(i >= 2){
    console.log(`En el año ${year - each + i} cumpliste ${i} años`);
    }
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

const randomNumber = () => {
  let randomArray1 = []
  let randomArray2 = []
  let randomArray3 = []

  for (let i = 0; i <= 4; i++) {
    let firstNum = Math.floor(Math.random() * 11)
    randomArray1.push(firstNum)
    
    let secondNum = Math.floor(Math.random() * 11)
    randomArray2.push(secondNum)
    }
  for (let i = 0; i < randomArray1.length; i++){
    if(randomArray2.includes(randomArray1[i])){
      randomArray3.push(randomArray1[i])
    }
  }
console.log(randomArray1);
console.log(randomArray2);
console.log(`Los valores repetidos son:${randomArray3}`);
};
randomNumber();  // explicación  

//8 - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

//9 - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const basePower = num => {
  
  for (let i = 0; i < num.length; i++){
    let square = Math.pow(num[i],2)
    let cube = Math.pow(num[i],3)
    console.log(`Número: ${num[i]} Cuadrado: ${square} Cubo: ${cube}` )
  }
}
basePower([1,2,3,4,5,6,7,8,9,10])

//10 - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const upperLetters = word => {
  let letters = ""
  for (let i = 0; i < word.length; i++){
    if(word.charAt(i).toUpperCase() === "A" || word.charAt(i).toUpperCase() === "E" || word.charAt(i).toUpperCase() === "I" || word.charAt(i).toUpperCase() === "O" || word.charAt(i).toUpperCase() === "U"){
      letters += word.charAt(i).toUpperCase()
    }else{
      letters += word.charAt(i)
    }
    
  }
  console.log(letters)
}
upperLetters("bienvenido")  // necesito explicacion si esta bien y por que


//11 - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1

const phrase = letters => {
 
 let countVowels1 = 0
 let countVowels2 = 0
 let countVowels3 = 0
 let countVowels4 = 0
 let countVowels5 = 0
  for (let i = 0; i < letters.length; i++){
    
    if(letters.charAt(i) === "a" || letters.charAt(i) === "A"){
      countVowels1+= letters.includes(letters)
    }
    if(letters.charAt(i) === "e" || letters.charAt(i) === "E"){
      countVowels2+= letters.includes(letters)
    }
    if(letters.charAt(i) === "i" || letters.charAt(i) === "I"){
      countVowels3+= letters.includes(letters)
    }
    if(letters.charAt(i) === "o" || letters.charAt(i) === "O"){
      countVowels4+= letters.includes(letters)
    }
    if(letters.charAt(i) === "u" || letters.charAt(i) === "U"){
      countVowels5+= letters.includes(letters)
    }
    
  }
  console.log(`El número de vocales es: a:${countVowels1}, e:${countVowels2} , i:${countVowels3} , o:${countVowels4} , u:${countVowels5} `)
}
phrase("El mundo no es un problema; el problema es tu desconocimiento")

/* const phrase = letters => {
 
  let countVowels1 = 0
  let countVowels2 = 0
  let countVowels3 = 0
  let countVowels4 = 0
  let countVowels5 = 0
   for (let i = 0; i < letters.length; i++){
     
     if(letters.charAt(i) === "a"){
       countVowels1+= letters.includes(letters)
     }
     if(letters.charAt(i) === "e"){
       countVowels2+= letters.includes(letters)
     }
     if(letters.charAt(i) === "i"){
       countVowels3+= letters.includes(letters)
     }
     if(letters.charAt(i) === "o"){
       countVowels4+= letters.includes(letters)
     }
     if(letters.charAt(i) === "p"){
       countVowels5+= letters.includes(letters)
     }
     
   }
   console.log(`El número de vocales es: a:${countVowels1}, e:${countVowels2} , i:${countVowels3} , o:${countVowels4} , u:${countVowels5} `)
 }
 phrase("El mundo no es un problema; el problema es tu desconocimiento") */

// 12 - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const insert = (wordA, wordB) => {
  let mixLetters = ""
  let math = Math.max(wordA.length, wordB.length)
  for(i=0; i <= math; i++){
    mixLetters+= wordA.charAt(i)+wordB.charAt(i)
  }
  console.log(mixLetters)
}
insert("adios","hola") // no estoy seguro si deberia de usar 2 if aqui para palabras inversa

// 13 - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"


const newLetters = word => {
  let letters = ""

  for(i = word.length -1; i >= 0; i--){

    letters += word[i]

  }
  console.log(letters)
}
newLetters("Consejos")

/* const newLetters = word => {
  let letters = ""

  for(i=0; i < word.length; i++){

    letters += word.charAt(7,0) + word.charAt(6) + word.charAt(5) + word.charAt(4) + word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0)

  }
  console.log(letters[i-8] + letters[i-7]+ letters[i-6] + letters[i-5] + letters[i-4] + letters[i-3] + letters[i-2] + letters[i-1] )
}
newLetters("Consejos") */

//14 - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]



const fiveLetters = array => {
  let newArray = []
  for(i = 0; i < array.length; i++){
    newArray.push(array[i].charAt(0).toUpperCase())
    newArray.push(array[i].charAt(array[i].length-1).toUpperCase())
    
  }
  console.log(newArray)
}
fiveLetters(["militar", "rodilleras", "bombardear", "boquilla", "lenguaje"])


/* const fiveLetters = array => {
  let newArray = []
  for(i = 0; i < array.length; i++){
    newArray+= array[i].charAt(0).toUpperCase() + array[i].charAt(array[i].length-1).toUpperCase()
    
    
  }
  console.log(newArray)
}
fiveLetters(["militar", "rodilleras", "bombardear", "boquilla", "lenguaje"]) */























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
