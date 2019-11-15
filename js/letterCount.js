var charObject = {}

const letterCount = (str) => {
  let letters = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
     if (charObject.hasOwnProperty(letters[i])) {
        charObject[letters[i]] += 1
      } else {
        charObject[letters[i]] = 1
      }
    }
    for (const prop in charObject) {
      console.log(`${prop} - ${charObject[prop]}`)
    }
}

letterCount("misSiSsIPpi rIveR")