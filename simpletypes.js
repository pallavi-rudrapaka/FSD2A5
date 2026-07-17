"use strict";
let username = "Alice";
let userAge = 25;
let isMember = true;
console.log("Data type of usernameis:" + typeof username);
console.log("Data type of userage is:" + typeof userAge);
console.log("Data type of isMember is:" + typeof isMember);
function displayUserprofile(name, age, active) {
    console.log(`User${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active ? "Active" : "Inactive"}`);
}
displayUserprofile(username, userAge, isMember);
