// function filterOutFalsy(val1, val2) {
//     return !val1 ? val1 : val2
// }
// console.log(filterOutFalsy(true, "dog"))

// function arrLength(arr) {
//     return arr[arr.length - 1]
// }
// console.log(arrLength([0, 1, 2, 3]))

// function arrSum(arr) {
//     let sum = 0 //how to loop through and array
//     for (let i = 0; i < arr.length; ++i) {
//     sum = sum + arr[i] //how to add it to the next item in the array
// }
// return sum //gives you to total outcome
// }

// console.log(arrSum([2, 2, 2]))

// function progressiveSum(val1) {
//     let sum = 0;
//     for (let i = 0; i <= val1; ++i) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(progressiveSum(6))

// function calcTime(seconds) {
//     let timeMinutes = Math.floor(seconds / 60);
//     let timeSeconds = seconds % 60;

//     if (timeMinutes.toString().length === 1) {
//         timeMinutes = '0' + timeMinutes
//     }
//     return timeMinutes + ':' + timeSeconds
// }
// console.log(calcTime(600))

// function getMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max
// }
// console.log(getMax([-900, -200, -300]))

// function reverseString(str) { //Method 1 incrementing loop
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i) { //This is how to loop through ever character in a string
//         reversedString = str[i] + reversedString;
//     }
//     return reversedString;
// }
// console.log(reverseString('food'))

// function reverseString(str) { //Method 2 decrementing loop
//     let reversedString = '';
//     for (let i = str.length - 1; i >= 0; --i) { //This is how to loop through ever character in a string
//         reversedString += str[i]
//     }
//     return reversedString;
// }
// console.log(reverseString('hot'))

//to convert string to array add .split('') to the end of the string. 'food'.split('') add .reverse() then join the array back together with .join('')
// function reverseString(str) { //Method 3 reversed array property /arrays have reverse property available
//     let reversedString = str.split('').reverse().join('')
//     return reversedString
// }
// console.log(reverseString('food'))

// function convertToZero(arr) { //Method 1 for loop
//    let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//      newArr[i] = 0   
//     }
//     return newArr
// }
// console.log(convertToZero([1, 2, 3, 4, 5, 6]))

// function convertToZero(arr) { //Method 2 array fill
//     return new Array(arr.length).fill(0)
//  }
//  console.log(convertToZero([1, 2, 3]))

// Map converts every item in array to whatever the right element is in the paranthesis
//  function convertToZero(arr) { //Method 3 array map
//     return arr.map(elem => 0)
//  }
//  console.log(convertToZero([1, 2, 3, 4, 5, 6]))

// function removeApples(arr) { //Method 1 for loop
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple')
//         newArr.push(arr[i])
// }
// return newArr
// }console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

// function removeApples(arr) { //Method 2 array filter
//        return arr.filter(elem => elem !== 'Apple')
// }
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

// function filterOutFalsy(arr) { //Method 1 for loop
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true)
//         newArr.push(arr[i])
// }
// return newArr
// }console.log(filterOutFalsy(['', [], 0, null, undefined, '0']))

// function filterOutFalsy(arr) { //Method 2 array filter !! determines if something is truthy or falsy
//     return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy(['', [], 0, null, undefined, '0']))

// function convertToBoolean(arr) { //for loop
//     let newArr = []
//     for (let i = 0; i < arr.length; ++i) {
//         newArr.push(!!arr[i])
//     }
//     return newArr
// }
// console.log(convertToBoolean([500, 0, 'David', '', []]))

// function convertToBoolean(arr) { //map method
//     return arr.map(elem => !!elem)
// }
// console.log(convertToBoolean([500, 0, 'David', '', []]))

