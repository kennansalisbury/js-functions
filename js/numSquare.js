var perfectSquareArr = []

const numSquare = (max) => {
    for (let x = 1; x <= max; x++) {
        perfectSquareArr.push(x*x)
    }
    return perfectSquareArr
}

console.log(numSquare(5))