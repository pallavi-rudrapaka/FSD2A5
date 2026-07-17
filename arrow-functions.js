"use strict";
function calculate(price, tax) {
    return price + (price * tax);
}
const calculateTotal = (price, tax) => {
    return price + (price * tax);
};
const getWelcome = (theatre) => `Welcome to ${theatre} Movie!`;
const ticketrate = 250;
const gstRate = 0.18;
console.log(getWelcome("KGF"));
const total1 = calculate(ticketrate, gstRate);
console.log(`Total (Traditional):${total1}`);
const total2 = calculateTotal(ticketrate, gstRate);
console.log(`Total (Arrow):${total2}`);
