arrayTest = [1, 2, 3, 4, 5]

const mean = (arr) => {
  let total = 0; //NEED TO PUT TOTAL AS 0 TO START WITH A NUMBER OR WILL GET NOT A NUMBER
  if(arr.length) {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
  }
  return total/arr.length
}

console.log(mean(arrayTest))