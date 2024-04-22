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
let day = parseInt(prompt("Enter the number between 1-7 for a day of the week, where Sunday is 1, Monday is 2, Tuesday is 3 etc. "))
console.log(`It is a weekend: ${is_it_the_weekend(day)}`);

function evNineIble(value) {
    if (value%9 == 0){
        return true;
    }
    else {
        return false;
    }
}
let value = parseInt(prompt("Enter a value: "));
console.log(`The number is evenly divisible by 9: ${evNineIble(value)}`);

function area_circle(r) {
    return Math.PI * r ** 2;
  }
function area_label(r, h) {
    return 2 * Math.PI * r * h;
  }
function area_cylinder(r, h) {
    return 2 * area_circle(r) + area_label(r, h);
  }
let r = parseInt(prompt("Enter the radius value for the top of a cylinder: "));
let h = parseInt(prompt("Enter the height of this cylinder: "));
console.log(`The area of the circle on top is: ${area_circle(r)}\nThe area of this cylinders label (vertical surface) is: ${area_label(r, h)}\nThe surface area of this cylinder is: ${area_cylinder(r, h)}`);

