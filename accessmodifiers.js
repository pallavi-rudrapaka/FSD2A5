"use strict";
class DigitalWallet {
    holdername;
    balance;
    secretpin;
    loyaltypoints = 0;
    constructor(name, initialDeposit, pin) {
        this.holdername = name;
        this.balance = initialDeposit;
        this.secretpin = pin;
    }
    withdrawMoney(amount, enteredpin) {
        if (this.verifypin(enteredpin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`${amount} withdrawn succesfully. Remaining:${this.balance}`);
            }
            else {
                console.log("Inadequate funds in ypur wallet");
            }
        }
        else {
            console.log("Incorrect pin transaction declined");
        }
    }
    verifypin(pin) {
        return this.secretpin == pin;
    }
}
class premiumwallet extends DigitalWallet {
    addBonus() {
        this.loyaltypoints += 100;
        console.log(`Bonus added!Total points:${this.loyaltypoints}`);
    }
}
const mywallet = new DigitalWallet("Akash Murthy", 4000, 4567);
console.log(`Welcome,${mywallet.holdername}`);
mywallet.withdrawMoney(1000, 7986);
