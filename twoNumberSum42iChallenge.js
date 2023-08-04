function findPairWithSum(numbers, targetSum) {
    const numberToShow = {}  //  aqui voy a guardar los numeros que se observaron del array numbers
    for (let i=0 ; i < numbers.length; i++) { // recorro el array de numeros
        const num = numbers[i] // guardo el numero actual del array numbers, para poder operar acontinuacion
        const add = targetSum - num // calculo el complemento que hace falta para alcanzar targetSum

        if (numberToShow[add] !== undefined) {
            return `The pair of numbers that sum to ${targetSum} is: ${[num, add]}`
        }
        console.log([num,add])

    }
}

const numbers = [2, 7, 11, 15];
const targetSum = 9;
findPairWithSum(numbers, targetSum);

/* const numbers = [2, 7, 11, 15];
const targetSum = 9;
findPairWithSum(numbers, targetSum); // Output: [2, 7]

const numbers = [3, 6, 8, 10];
const targetSum = 15;
findPairWithSum(numbers, targetSum); // Output: [] */