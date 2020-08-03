// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// create a function
const code = (string) => {
// split string into an array
  let splitString = string.split("")
// map through the array
  let codedArray = splitString.map(value => {
    // return the replacement value for each letter
    if(value === "a" || value === "A"){
      return value = "4"
    } else if(value === "e" || value === "E"){
      return value = "3"
    } else if(value === "i" || value === "I"){
      return value = "1"
    } else if(value === "o" || value === "O"){
      return value = "0"
    } else {
      return value
    }
  })
// join the array back to the string
  return codedArray.join("")
}
console.log(code(secretCodeWord1))
console.log(code(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aWord = (array) => {
// filter through the array
  return array.filter(value => {
    // drop to lowercase
    // element includes the letter a
    return value.toLowerCase().includes("a")
  })
}
console.log(aWord(arrayOfWords))

// refactor with regex
const aWord2 = (array) => {
// filter through the array
  return array.filter(value => {
    // drop to lowercase
    // element includes the letter a
    return value.match(/a/i)
  })
}
console.log(aWord2(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const letsSee = (array) => {
  let sortedArr = array.sort()
  // sort method
  let fullHouseArray = []
  let remaining = []
  // iterate through the array, check if three of the values are the same
  for(let i=0; i<sortedArr.length; i++){
    if(
      sortedArr[i+2] === sortedArr[i+1] &&
      sortedArr[i+1] === sortedArr[i] &&
      sortedArr[i+2] === sortedArr[i]
    ){
      // if value is the same, push into an empty array
      fullHouseArray.push(sortedArr[i+2])
      fullHouseArray.push(sortedArr[i+1])
      fullHouseArray.push(sortedArr[i])
    } else {
      remaining.push(sortedArr[i])
    }
  }
  // iterate through remaining values to see if they match
  for(let k=0; k<remaining.length-2; k++){
    if(remaining[k+1] === remaining[k]){
      // if yes, push into array holding other values
      fullHouseArray.push(remaining[k+1])
      fullHouseArray.push(remaining[k])
    }
  }
  // if fullHouseArray.length = 5 you full house
  if(fullHouseArray.length === 5){
    return `Congrats, your hand of ${fullHouseArray} is a full house`
  } else {
    return "Womp, womp."
  }
}
console.log(letsSee(hand1))
console.log(letsSee(hand2))
console.log(letsSee(hand3))
