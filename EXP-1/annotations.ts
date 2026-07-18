let bookname: string="Mahagatha";
let releaseyear: number=2024;
let available: boolean=true;
function getBookStatus(name:string,release:number):
string{
    return `${name} was a good outcome in year ${release}`;
}
let characters: string[]=["shiva","vishnu","chandra","rohini"];
const summary: string=getBookStatus(bookname,releaseyear);
console.log(summary);
console.log(`Characters:${characters}`);
