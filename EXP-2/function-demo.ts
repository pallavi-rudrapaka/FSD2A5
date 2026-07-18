function greet(name: string):string{
    return `Namaste,${name}!`;
}
function getLocation(city: string="Chennai"): string{
    return `Location:${city}`;
}
function sendalert(phonenumber:number,message?:string):void{
    console.log(`sending SMS to ${phonenumber}...`);
    if(message){
        console.log(`Content:${message}`);
    }
}
function calculate(...scores: number[]): number{
    return scores.reduce((total,current)=>total+current,0);
}
console.log(greet("geetha"));
console.log(getLocation());
console.log(getLocation("kerala"));
sendalert(8907896786);
sendalert(8907896786,"Come early");
