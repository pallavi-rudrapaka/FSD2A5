class OnlineCourse {
    public studentName: string;
    private courseFee: number;
    private accessCode: string;
    protected completedLessons: number = 0;

    constructor(name: string, fee: number, code: string) {
        this.studentName = name;
        this.courseFee = fee;
        this.accessCode = code;
    }

    public enrollCourse(code: string): void {
        if (this.verifyCode(code)) {
            console.log(`${this.studentName} enrolled successfully.`);
        } else {
            console.log("Invalid access code. Enrollment failed.");
        }
    }

    private verifyCode(code: string): boolean {
        return this.accessCode === code;
    }
}

class PremiumCourse extends OnlineCourse {

    public completeLesson(): void {
        this.completedLessons++;
        console.log(`Lesson completed! Total lessons completed: ${this.completedLessons}`);
    }
}

const student = new PremiumCourse("Pallavi", 5000, "AI2026");

console.log("Student Name: " + student.studentName);

student.enrollCourse("AI2026");

student.completeLesson();
student.completeLesson();