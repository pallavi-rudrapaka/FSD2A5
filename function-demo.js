"use strict";
function greet(name) {
    return `Namaste,${name}!`;
}
function getLocation(city = "Chennai") {
    return `Location:${city}`;
}
function sendalert(phonenumber, message) {
    console.log(`sending SMS to ${phonenumber}...`);
    if (message) {
        console.log(`Content:${message}`);
    }
}
function calculate(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(greet("geetha"));
console.log(getLocation());
console.log(getLocation("kerala"));
sendalert(8907896786);
sendalert(8907896786, "Come early");
