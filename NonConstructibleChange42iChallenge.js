function nonConstructibleChange(coins) {
    let sortedCoins = coins.sort((a, b) => a - b);
    let min = 1; 
    for (let i = 0 ; i < sortedCoins.length ; i++) { 
        if (sortedCoins[i] <= min) { 
            min = min + sortedCoins[i];
        }
    }
    return min; 
}

