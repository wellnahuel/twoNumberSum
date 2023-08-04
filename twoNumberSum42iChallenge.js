function findPairWithSum(numbers, targetSum) {
    const numberToShow = {}  //  aqui voy a guardar los numeros que se observaron del array numbers
    for (let i=0 ; i < numbers.length; i++) { // recorro el array de numeros
        const num = numbers[i] // guardo el numero actual del array numbers, para poder operar acontinuacion
        const add = targetSum - num // calculo el complemento que hace falta para alcanzar targetSum
        //en este condicional if en el primer ciclo del for no se va a cumplir nunca la condicion ya que el bojeto esta vacio
        if (numberToShow[add] !== undefined) { //verifico que el numero que me falta para alcanzar targetSum esta en el objeto 
            return `The pair of numbers that sum to ${targetSum} is: ${[num, add]}` //si encontramos el complemento en el objeto numberToShow, retornamos el par de numeros buscados
        }
        console.log([num,add])

        numberToShow[num] = true; //si la busqueda fracasa y no se encuentra el complemento, se guarda el num en el objeto con una propiedad true para llevar un registro
        console.log([num,add])
    }
    return []  // si el ciclo for no encuentra coincidencias se retorna un arrayvacio
}

const numbers = [3, 6, 8, 10];
const targetSum = 15;
findPairWithSum(numbers, targetSum);

/* const numbers = [2, 7, 11, 15];
const targetSum = 9;
findPairWithSum(numbers, targetSum); // Output: [2, 7]

const numbers = [3, 6, 8, 10];
const targetSum = 15;
findPairWithSum(numbers, targetSum); // Output: [] */