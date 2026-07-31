let arr: number[]=[1,2,3,4,5];
let n: number=2;
let rotated: number[]=[];
for(let i=0;i<arr.length;i++)
{
    rotated[(i+arr.length-n)%arr.length]=arr[i];
}
console.log(rotated);