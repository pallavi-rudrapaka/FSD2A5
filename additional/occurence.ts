let arr: number[]=[1,2,2,3,1,4];
let count:{[key: number]: number}={};
for(let num of arr){
    if(count[num]){
        count[num]++;
    }else{
        count[num]=1;
    }
}
for(let num in count){
    console.log(num+" = "+count[num]);
}