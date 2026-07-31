let str: string="apple";
let frequency: {[key: string]: number}={};
for(let char of str){
    if(frequency[char]){
        frequency[char]++;
    }else{
        frequency[char]=1;
    }
}
for(let char in frequency){
    console.log(char+" = "+frequency[char]);
}