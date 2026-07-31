let str: string="programming";
let result: string="";
for(let char of str){
    if(!result.includes(char)){
        result+=char;
    }
}
console.log("Result= "+result);