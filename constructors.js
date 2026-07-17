"use strict";
class FixedDeposit {
    customerName;
    amount;
    interest;
    years;
    constructor(name, amount, rate, years) {
        this.customerName = name;
        this.amount = amount;
        this.interest = rate ?? 9.3;
        this.years = years ?? 1;
    }
    calculate() {
        const interests = (this.amount * this.interest * this.years) / 100;
        return this.amount + interests;
    }
    displayDetails() {
        console.log(`---FD Reciept--`);
        console.log(`Customer:${this.customerName}`);
        console.log(`Principal:${this.amount}`);
        console.log(`Rate:${this.interest}`);
        console.log(`Tenure:${this.years}Year(s)`);
        console.log(`Maturity Amount:${this.calculate()}`);
        console.log(`---------\n`);
    }
}
const standardFD = new FixedDeposit("Pallavi", 90000);
const seniorcitizenFD = new FixedDeposit("Gotham Kumar", 80000);
standardFD.displayDetails();
seniorcitizenFD.displayDetails();
seniorcitizenFD.amount = 30000;
console.log(`updated maturity for anjali:${seniorcitizenFD.calculate()}`);
