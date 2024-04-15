let random_number = Math.random() * 10;     // Get a single-digit value (with decimals)
random_number = Math.floor(random_number);  // Chop off the decimals
if (random_number==0 || random_number%2 == 0 || (random_number%2 == 0 && random_number%3 == 0) || (random_number==1 || random_number==2 || random_number==3 || random_number==5 || random_number==7)){
    console.log("So.");
}
else {
    console.log("Notso.");
}
console.log(random_number);