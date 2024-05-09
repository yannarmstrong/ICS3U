/**
* 3.4 - For Loops
* Author: YANN ARMSTRONG
*
* Lesson link:  https://gist.github.com/mrjamieson29/5c138c9e1de62b234899a28542ba00fd#file-3-4-for-loops-md
**/

const prompt = require('prompt-sync')();

// Counting up function
function countUp(start, stop){
    start = parseInt(prompt("Enter the start value: "));
    stop = parseInt(prompt("Enter the stop value: "));
    if (start>stop){
        console.log("Error. Start is less than stop.");
        return countUp(start, stop);
    }
    for (let i = start; stop>=i; i++)
        console.log(i);
    return "Done";
}
// Test
console.log(countUp(start, stop));