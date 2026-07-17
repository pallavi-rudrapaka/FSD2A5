function calculate(price:number,tax:number):
number{
    return price+(price*tax);
}

const calculateTotal=(price:number,tax:number):number=>{
    return price+(price*tax);
};
const getWelcome=(theatre:string):string=>`Welcome to ${theatre} Movie!`;
const ticketrate: number=300;
const gstRate: number=0.20;
console.log(getWelcome("KGF"));
const total1=calculate(ticketrate,gstRate);
console.log(`Total (Traditional):${total1}`);
 const total2=calculateTotal(ticketrate,gstRate);
console.log(`Total (Arrow):${total2}`);