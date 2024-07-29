// function isLoggedInAndSubscribed(logged, sub) {
//     return (logged === 'LOGGED_IN' || sub === 'SUBSCRIBED'? true : false)
// }

// console.log (isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

// function isNotZero(num1) {
//     return num1 === 0 ? false : true
// }

// console.log (isNotZero(100));

// function falseyOrTruthy(elem1, elem2) {
//     return !!elem1 === false ? elem1 : elem2
// }

// console.log (falseyOrTruthy (true, "Dog"))

// function arrLength(arr) {
//     return (arr [arr.length -1])
// }

// console.log (arrLength ([12, 42, 83, 25]))

// ADDS EACH ELEMENT OF AN ARRAY TO MAKE A SUM
// function arrSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log (arrSum ([10, 4, 3, 4]))

// function progressiveSum(num) {
//     let sum = 0
//     for (let i = 0; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum
// }

// console.log(progressiveSum (3))

// function calcTime(seconds) {
//     let timerMinutes = Math.floor (seconds / 60);
// let timerSeconds = seconds % 60;

// if (timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
// }

// return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime (5000))

// function getMax(arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(getMax ([-500, -200, 300]))

// INCREMENTING
// function reverseString (string) {
//     let reverseString = ''
//     for (let i = 0; i < string.length; ++i) {
//         reverseString = string[i] + reverseString
//     }
//     return reverseString
// }
// console.log(reverseString ('abc'))

// DECREMENTING
// function reverseString (string) {
//     let reverseString = ''
//     for (let i = string.length - 1; i >= 0; --i) {
//         reverseString += string[i]
//     }
//     return reverseString
// }
// console.log(reverseString ('abc'))

// reverse EASIEST
// function reverseString (string) {
//     let reverse = string.split('').reverse().join('')
//     return reverse
// }
// console.log(reverseString ('Power'))

// incrementing for loop
// decrementing for loop
// array reverse property

// function convertToZeros (arr) {
//     for (i = 0; i < arr.length; ++i) {
//         arr[i] = 0
//     }
// return arr
// }

// console.log (convertToZeros ([1, 2, 5, 6]))

// function convertToZeros (arr) {
//     let newArr = arr.map ((element) => 0)
//     console.log (newArr)

// }
// console.log (convertToZeros ([1, 2, 3, 4, 5]))
// if using map, there is an "invisible" return command built in.
// if you map an element containing an Object with curly brackets,
// that disappears and you have to write in return of something.

// function convertToZeros (arr) {
//    return new Array(arr.length).fill(0)

// }
// console.log (convertToZeros ([1, 2, 3, 4, 5, 9, 12, 12, 234, 3445]))

// function convertToZeros (arr) {
//     let newArr = arr.map ((element) => 0)
//     console.log (newArr)

// }
// console.log (convertToZeros ([1, 2, 3, 4, 5]))

// function removeApples (arr) {
//     let noApples = []
//     for (i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple')
//             // console.log(arr[i])
//             noApples.push(arr[i])
//     }
//     return noApples
// }
// console.log (removeApples (['Banana', 'Apple', 'Orange', 'Apple']))

// function removeApples (fruit) {
//    let removed = fruit.filter (element => element !=='Apple')

//         return removed

// }
// console.log (removeApples(['Tomato', 'Orange', 'Banana', 'Apple']))

// OR ONE LESS LINE**************

// function removeApples (arr) {
//     return arr.filter(element => element !== 'Apple')
// }
// console.log (removeApples(['Apple', 'banana', 'orange', 'lemon']))

// function filterOutFalsy (arr) {

//     return arr.filter (element => !!element === true)
// }
// console.log (filterOutFalsy(['Apple', 'banana', 'orange', 'false', 0, false, undefined, 'undefined']))

// NOTE - the string '0' is truthy, but the number 0 is falsy .
// The string 'undefined' is truthy, but the word undefined is falsy

// function filterOutFalsy (arr) {
//     let noFalsy = []
//     for (i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true)
//         noFalsy.push (arr[i])

//     }
//     return noFalsy

// }
// console.log (filterOutFalsy(["apple", 0, "banana", undefined, "lemon"]))

// function converToBoolean (arr) {
//     let value = []
//     for (i = 0; i < arr.length; ++i) {
//             if (!!arr[i] === true)
//                 value.push("true")
// else if (!!arr[i] !== true)
//             value.push("false")
//     }
//     return value
// }
// console.log (converToBoolean (['Anthony', undefined, 500, '', '0', null, 5]))

// SIMPLER VERSION WITH MAP
//     function converToBoolean (arr) {
// return arr.map(element => !!element)
//     }
//     console.log (converToBoolean (['Anthony', undefined, 500, '', '0', null, 5]))

// function progressiveSum(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratings = ratings + "*";
//     if (i !== Math.floor(rating) - 1) {
//       ratings = ratings + " ";
//     }
//   }
//   if (!Number.isInteger(rating)) {
//     ratings = ratings + " ."
//   }
//   return ratings;
// }
// console.log(progressiveSum(3.5));
// initialize an empty Stringloop through the rounded down rating
// add a star for every iteration
// if its not the last iteration add a space
// if the number is not an isInteger
// add a full stop
// return it


// function sortLowToHigh (arr) {
// return arr.sort((a, b) => a - b)
// }

// console.log (sortLowToHigh([20, 40, 10, 30, 50, 10]))


// function sortHighToLow (arr) {
// return arr.sort((a, b) => b.price - a.price)
// }

// console.log (sortHighToLow([{id: 1, price: 50}, {id: 2, price: 30}, {id: 3, price: 60}, {id: 4, price: 10}]))
// SORTING BY OBJECTS IN ARRAY

// The Async Await Episode I Promised

// Async Await JavaScript ES7

// Async JS Crash Course - Callbacks, Promises, 

// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
// }

// postsByUser(6)


// async function firstSixIncomplete(completed) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const result = await promise.json()
//     const incompletedTasks = result.filter(element => !element.completed).slice(0, 6)

//     console.log (incompletedTasks)
      
// }

// firstSixIncomplete("completed")