function findPairWithSum(numbers, targetSum) {
    const numberToShow = {}  
    for (let i=0 ; i < numbers.length; i++) { 
        const num = numbers[i] 
        const add = targetSum - num 
        if (numberToShow[add] !== undefined) { 
            return `The pair of numbers that sum to ${targetSum} is: ${[num, add]}` 
        }
        numberToShow[num] = true; 
    }
    return []  
}