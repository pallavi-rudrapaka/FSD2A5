let num: number=153;
let original: number=num;
let sum: number=0;
while(num>0){
    let digit: number=num%10;
    sum=sum+(digit*digit*digit);
    num=Math.floor(num/10);
}
if(sum==original){
    console.log(original+" is an Armstring NUmber");
}
else{
    console.log(original+" is not an Armstrong Number");
}