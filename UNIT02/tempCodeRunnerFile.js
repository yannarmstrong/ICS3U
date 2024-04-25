function is_it_the_weekend(day) {
    day = parseInt(prompt("Enter the number between 1-7 for a day of the week, where Sunday is 1, Monday is 2, Tuesday is 3 etc. "))
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
console.log(`It is a weekend: ${is_it_the_weekend(day)}`);