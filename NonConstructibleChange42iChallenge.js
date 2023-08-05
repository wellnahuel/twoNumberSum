function nonConstructibleChange(coins) {
    let min = 1; //defino un minimo como referencia
    for (let i = 0 ; i < coins.length ; i++) { //recorro el array de monedas
        if (coins[i] <= min) { //si la moneda es menor al minimo entonces a este le sumamos la moneda
            min = min + coins[i];
        }
    }
    //console.log(min)
    return min; //obtengo 8, por lo que sumo 1+1+2+3=7+1=8, esto lo soluciono ordenando ascendentemente a coins
}


const coins = [5, 7, 1, 1, 2, 3, 22];
//nonConstructibleChange(coins)
console.log(nonConstructibleChange(coins));

/* 

# Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change that you can’t create is `4`. If you’re given no coins, the minimum amount of change that you can’t create is 1.

### **Sample Input**

`coins = [5, 7, 1, 1, 2, 3, 22]`

### **Sample Output**

`20`

*/