class FixedDeposit{
    public customerName: string;
    public amount: number;
    public interest: number;
    public years: number;
    constructor(name:string,amount:number);
    constructor(name:string,amount:number,rate:number,years:number);
    constructor(name:string,amount:number,rate? :number,years?:number){
    this.customerName=name;
    this.amount=amount;
    this.interest =rate?? 9.3;
    this.years=years?? 1 ;
    }
    public calculate():number{
        const interests=(this.amount*this.interest*this.years)/100;
        return this.amount+interests;
    }
    public displayDetails():void{
        console.log(`---FD Reciept--`);
        console.log(`Customer:${this.customerName}`);
        console.log(`Principal:${this.amount}`);
        console.log(`Rate:${this.interest}`);
        console.log(`Tenure:${this.years}Year(s)`);
        console.log(`Maturity Amount:${this.calculate()}`);
        console.log(`---------\n`);
    }
}
const first=new FixedDeposit("Pallavi",90000,8.1,6);
const second=new FixedDeposit("Gowtham Kumar",80000);
first.displayDetails();
second.displayDetails();
second.amount=30000;//this line demonstrates object propertirs can also be modified after creation
console.log(`updated maturity for Gowtham:${second.calculate()}`);