/**
* 3.5 - Arrays
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/15e55a00de74370ea20a46a12181e80b#file-3-6-arrays-md
**/

const prompt = require('prompt-sync')();

// Print array function
function print_array(arr){
    console.log("Lets print an array!");
    for (let i = 0; i <= (arr.length - 1); i++){
        console.log(arr[i]);
    }
    return "Complete";
}

// Min function
function min(arr){
    let min = arr[0];
    let position = "";
    for (let i = 0; i <= (arr.length - 1); i++){
        if (arr[i] < min){
            min = arr[i];
            position = i + 1;
        }
    }
    return `The lowest value in this array of numbers is ${min} in the ${position} position in the list`;
}

// Finding the longest string
function longest_string(arr){
    let longest = arr[0];
    let temp = "";
    for (let i = 0; i <= (arr.length - 1); i++){
        temp = arr[i]
        if (temp.length > longest.length){
            longest = arr[i]
        }
    }
    let length = longest.length;
    return `The longest string in this array is ${longest} at ${length} characters long!`;
}

// Contain function
function contains(arr, value) {
    for (let i = 0; i <= (arr.length - 1); i++) {
        if (arr[i] == value) {
            return true;
        }
    }
    return false;
}

// Max Min function
function min_max(arr){
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i <= (arr.length - 1); i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return `The max value is ${max}\nThe min value is ${min}`;
}

// Test Functions
let testArrayOne = [1,3,6,2,8,12,43,12,436,21,-423, "12", "Hello World!", "Mr. Jamieson", "Bye", "Cool", true, false, false, true, "I am cool", true, "The", "End",24];
console.log(print_array(testArrayOne));

let testArrayTwo = [2,5,2,7,1,2,67,8,8,12,42,235,574,76,12,12,5,235,-1,12,6,4,1,67,8,9,23,1,2,6,21,126,-4,24,6];
console.log(min(testArrayTwo));

let testArrayThree = ["Super", "Mega", "Amazing", "OMG", "lol", "Happy", "My name is Yann", "Cya"];
console.log(longest_string(testArrayThree));

let testArrayFour = ["Mr. Jamieson", 5,2,6,8,1,12,734,125123, true, "Mother", "Father", "Yann", "Apple", "Orange", 1,2,3,4,5,6,7,8,9,10]
console.log(contains(testArrayFour, prompt("Try and guess a value within this mystery string. ")));

let testArrayMinMax = [2,5,2,7,1,2,67,8,8,12,42,235,574,76,12,12,5,235,-1,12,6,4,1,67,8,9,23,1,2,6,21,126,-4,24,6];
console.log(min_max(testArrayMinMax));
