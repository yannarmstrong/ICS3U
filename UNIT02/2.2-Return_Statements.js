const prompt = require('prompt-sync')();

function is_it_the_weekend(day) {
    if (day == 1 || day == 7){
        return true;
    }
    else if (2<= day && day<=6) {
        return false;
    }
    else {
        return "Please enter a number between 1 and 7.";
    }
}

function evNineIble(value) {
    if (value%9 == 0){
        return true;
    }
    else {
        return false;
    }
}

function area_circle(r) {
    return Math.PI * r ** 2;
  }
function area_label(r, h) {
    return 2 * Math.PI * r * h;
  }
function area_cylinder(r, h) {
    return 2 * area_circle(r) + area_label(r, h);
  }

  function ghost_watch(polter, wolter){
    //0=Neutral 1=Laughing 2=Angry
    // console.log(polter, wolter); //Used to test code
    if ((polter == 1 && wolter == 1) || (polter == 2 && wolter == 2) || (polter == 1 && wolter == 2) || (polter == 2 && wolter == 1)){
        return true
    }
    else {
        return false
    }
}

// Run functions
//1
let day = parseInt(prompt("Enter the number between 1-7 for a day of the week, where Sunday is 1, Monday is 2, Tuesday is 3 etc. "))
console.log(`It is a weekend: ${is_it_the_weekend(day)}`);
//2
console.log(`The number is evenly divisible by 9: ${evNineIble(value = parseInt(prompt("Enter a value: ")))}`);
//3
let r = parseInt(prompt("Enter the radius value for the top of a cylinder: "));
let h = parseInt(prompt("Enter the height of this cylinder: "));
console.log(`The area of the circle on top is: ${area_circle(r)}\nThe area of this cylinders label (vertical surface) is: ${area_label(r, h)}\nThe surface area of this cylinder is: ${area_cylinder(r, h)}`);
//4
console.log(`---Enable lockdown mode---\n${ghost_watch((Math.floor(Math.random()*3)), (Math.floor(Math.random()*3)))}`);