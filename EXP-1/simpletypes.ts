let username:string="Alice";
let userAge: number=25;
let isMember: boolean=true;
console.log("Data type of usernameis:"+typeof username);
console.log("Data type of userage is:"+typeof userAge);
console.log("Data type of isMember is:"+typeof isMember);
function displayUserprofile(name:string,age:number,active:boolean):
void{
    console.log(`User${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active?"Active":"Inactive"}`);
}
displayUserprofile(username,userAge,isMember);
