let arr: number[]=[1,2,4,5];
let n: number=5;
let expectedsum: number=(n*(n+1))/2;
let actualsum: number=0;
for(let num of arr){
    actualsum+=num;
}
let missing: number=expectedsum-actualsum;
console.log("Missing Number= "+missing);