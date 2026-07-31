let arr: number[]=[10,25,8,40,30];
let largest: number=arr[0];
let slargest: number=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        slargest=largest;
        largest=arr[i];
    }
    else if(arr[i]>slargest && arr[i]!=largest){
        slargest=arr[i];
    }
}
console.log("Largest= "+largest);
console.log("Second Largest= "+slargest);