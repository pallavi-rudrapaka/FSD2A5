let arr: number[]=[1,2,2,3,4,4,5];
let count: {[key: number]: number}={};
for(let num of arr){
    if(count[num]){
        count[num]++;
    }else{
        count[num]=1;
    }
}
console.log("Duplicate Elements:");
for(let num in count){
    if(count[num]>1){
        console.log(num);
    }
}