let binary: number=1010;
let decimal: number=0;
let power: number=0;
while(binary>0){
    let digit: number=binary%10;
    decimal=decimal+digit*Math.pow(2,power);
    power++;
    binary=Math.floor(binary/10);
}
console.log("Decimal= "+decimal);