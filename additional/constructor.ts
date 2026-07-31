class Student{
    name: string;
    age: number;
    course: string;
    constructor(name: string,age: number, course: string){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    display(): void{
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Course: "+this.course);
    }
}
let student1= new Student("Pallavi",19,"AI&DS");
student1.display();