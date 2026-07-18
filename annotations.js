"use strict";
let bookname = "Mahagatha";
let releaseyear = 2024;
let available = true;
function getBookStatus(name, release) {
    return `${name} was a good outcome in year ${release}`;
}
let characters = ["shiva", "vishnu", "chandra", "rohini"];
const summary = getBookStatus(bookname, releaseyear);
console.log(summary);
console.log(`Characters:${characters}`);
