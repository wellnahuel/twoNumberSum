function nonConstructibleChange(coins) {
    let sortedCoins = coins.sort((a, b) => a - b);
    console.log(sortedCoins);

    let min = 1; //defino un minimo como referencia
    for (let i = 0 ; i < sortedCoins.length ; i++) { //recorro el array de monedas
        if (sortedCoins[i] <= min) { //si la moneda es menor al minimo entonces a este le sumamos la moneda
            min = min + sortedCoins[i];
            console.log(min)
        }
    }
    //console.log(min)
    return min; //obtengo 20, por lo que sumo 1+1+2+3+5+7=19+1=20
}

const coins = [5, 4, 1,1, 3 , 44, 3, 22]

//const coins = [5, 7, 1, 1, 2, 3, 22]; 
//nonConstructibleChange(coins)
console.log(nonConstructibleChange(coins));

//Pruebas adicionales exitosas
//const coins = [5, 4, 1,1, 3 , 44, 3, 22] Salida: 18
//const coins = [5, 4, 1, 3 , 44, 3, 22] Salida: 2 



/* 

# Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

### **Sample Input**

`coins = [5, 7, 1, 1, 2, 3, 22]`

### **Sample Output**

`20`

*/