arrayTest = [1, 2, 3, 4, 5]

sillySum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += (arr[i]*i)
    }
    return total
}

console.log(sillySum(arrayTest))