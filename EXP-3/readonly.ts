class College {

    public static readonly collegeName: string = "SVECW";
    public static totalStudents: number = 0;

    public readonly studentId: string;
    public studentName: string;

    constructor(name: string, id: string) {
        this.studentName = name;
        this.studentId = id;

        College.totalStudents++;
    }

    public static showCollegeInfo(): void {
        console.log("Welcome to " + College.collegeName);
        console.log("Admissions are open for the new academic year.");
    }

    public displayStudent(): void {
        console.log("Student Name : " + this.studentName);
        console.log("Student ID   : " + this.studentId);
    }
}

console.log("College Name : " + College.collegeName);

College.showCollegeInfo();

const student1 = new College("Pallavi", "22A81A0501");
const student2 = new College("Anusha", "22A81A0502");

student1.displayStudent();
student2.displayStudent();

console.log("Total Students : " + College.totalStudents);